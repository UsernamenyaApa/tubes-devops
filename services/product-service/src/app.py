from flask import Flask, jsonify
import os

app = Flask(__name__)

products = [
    {"id": 1, "name": "Laptop", "price": 15000000},
    {"id": 2, "name": "Mouse", "price": 250000},
]

@app.route('/health')
def health():
    return jsonify(status='ok', service='product-service')

@app.route('/products')
def list_products():
    return jsonify(products)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 3002)))
