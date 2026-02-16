import json
import os
import psycopg2


def handler(event, context):
    """Обновление данных автомобиля из админ-панели"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    body = json.loads(event.get('body', '{}'))
    car_id = body.get('id')
    if not car_id:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'id is required'})
        }

    fields = []
    values = []

    field_map = {
        'name': 'name',
        'category': 'category',
        'pricePerDay': 'price_per_day',
        'image': 'image',
        'description': 'description',
    }
    spec_map = {
        'year': 'spec_year',
        'transmission': 'spec_transmission',
        'fuel': 'spec_fuel',
        'seats': 'spec_seats',
        'engine': 'spec_engine',
    }

    for key, col in field_map.items():
        if key in body:
            fields.append(col + " = %s")
            values.append(body[key])

    specs = body.get('specs', {})
    for key, col in spec_map.items():
        if key in specs:
            fields.append(col + " = %s")
            values.append(specs[key])

    if not fields:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'no fields to update'})
        }

    fields.append("updated_at = NOW()")
    values.append(car_id)

    sql = "UPDATE cars SET " + ", ".join(fields) + " WHERE id = %s"

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(sql, values)
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps({'success': True})
    }
