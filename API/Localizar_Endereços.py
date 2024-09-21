from flask import Flask, jsonify
import requests

GEOAPIFY_API_KEY = '65b1227f2a9d414d91273daa95e6a4c3'

def take_locals(lat, long, type_local):

    api_url = "https://api.geoapify.com/v2/places"
    params = {
        'categories': type_local,
        'filter': f'circle:{long},{lat},5000',
        'bias': f'proximity:{long},{lat}',
        'limit': 10,
        'apiKey': GEOAPIFY_API_KEY
    }

    response = requests.get(api_url, params=params)

    if response.status_code:
        return response.json()
    else:
        return None
    
MAPS_API_KEY = 'AIzaSyCXG8mi-DEcP2knfHiOA2FWEQRfdDyzeOA'

def get_recycle_locals(lat, long, type_local):
    places_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"

    params = {
        'location': f'{lat},{long}',
        'radius': 10000,
        'types': 'reciclagem eletronico',
        'keyword': 'reciclagem eletronico',
        'query': 'reciclagem eletronico',
        'key': MAPS_API_KEY
    }
    response = requests.get(places_url, params=params)

    if response.status_code:
        return response.json()['results']
    else:
        return None