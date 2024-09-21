from flask import request
import requests

def get_ip():

    user_ip = request.headers.get('Cf-Connecting-Ip') or request.headers.get('True-Client-Ip')
    
    if not user_ip:
        user_ip = request.headers.get('X-Forwarded-For')
        if user_ip:
            user_ip = user_ip.split(',')[0]  # Pega o primeiro IP
        else:
            user_ip = request.remote_addr

    return user_ip
