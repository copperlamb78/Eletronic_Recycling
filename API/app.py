from Localizar_Endereços import get_recycle_locals
from Localizar_Ip import Local_geografy_ip
from Pegar_ip import get_ip
from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/teste')
def teste():
    return jsonify(dict(request.headers)), 200

@app.route('/')
def _get_ip():
    return get_ip()

@app.route('/local')
def _get_local():
    return Local_geografy_ip(get_ip())


@app.route('/api/enderecos')
def api():
    ip = get_ip()
    localizacao = Local_geografy_ip(ip)

    if localizacao:
        long = localizacao['longitude']
        lat = localizacao['latitude']

        local_type = 'service'

        result = get_recycle_locals(lat, long, local_type)

        if result:
            return jsonify(result)
        else:
            return jsonify({'error': 'falha ao buscar lugares próximos'}), 500
    else:
        return jsonify({'error': 'falha ao localizar IP'}), 500
    

if __name__ == "__main__":
    app.run(debug=True)
