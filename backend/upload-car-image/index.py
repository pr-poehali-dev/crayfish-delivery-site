import json
import os
import base64
import uuid
import boto3
import psycopg2


ALLOWED_TYPES = {
    'image/png': '.png',
    'image/jpeg': '.jpg',
    'image/jpg': '.jpg',
}


def handler(event, context):
    """Загрузка фото автомобиля (PNG/JPG) в S3 и обновление ссылки в БД"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    raw_body = event.get('body') or '{}'
    body = json.loads(raw_body)
    car_id = body.get('carId')
    file_data = body.get('file')
    content_type = body.get('contentType', 'image/jpeg')

    if not car_id or not file_data:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'carId and file are required'})
        }

    if content_type not in ALLOWED_TYPES:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Only PNG and JPG/JPEG formats are allowed'})
        }

    ext = ALLOWED_TYPES[content_type]
    file_bytes = base64.b64decode(file_data)

    file_name = f"cars/{car_id}_{uuid.uuid4().hex[:8]}{ext}"

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
    )
    s3.put_object(
        Bucket='files',
        Key=file_name,
        Body=file_bytes,
        ContentType=content_type,
    )

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{file_name}"

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute("UPDATE cars SET image = %s, updated_at = NOW() WHERE id = %s", (cdn_url, car_id))
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps({'success': True, 'imageUrl': cdn_url})
    }