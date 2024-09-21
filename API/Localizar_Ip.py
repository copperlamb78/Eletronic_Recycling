from flask import Flask, jsonify
import requests


app = Flask(__name__)

# Função para localizar geograficamente esse ip
def Local_geografy_ip(ip):
    api_url = f"https://api.ip2location.io/?key=9F01E6D296717F128B6B3B39EFCDB82E&ip={ip}"

    

    response = requests.get(api_url)

    if response.status_code == 200:
        return response.json()
    else:
        return jsonify({"error": "Falha ao consumir API"}), response.status_code
    
