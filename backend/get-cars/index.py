import json
import os
import psycopg2


def handler(event, context):
    """Получение списка всех автомобилей из базы данных"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute("SELECT id, name, category, price_per_day, image, description, spec_year, spec_transmission, spec_fuel, spec_seats, spec_engine FROM cars ORDER BY id")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    cars = []
    for r in rows:
        cars.append({
            'id': r[0],
            'name': r[1],
            'category': r[2],
            'pricePerDay': r[3],
            'image': r[4],
            'description': r[5],
            'specs': {
                'year': r[6],
                'transmission': r[7],
                'fuel': r[8],
                'seats': r[9],
                'engine': r[10],
            }
        })

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps(cars, ensure_ascii=False)
    }
