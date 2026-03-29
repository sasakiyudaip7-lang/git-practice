import requests


def get_pokemon_info():
    url = "https://pokeapi.co/api/v2/pokemon/pikachu"
    response = requests.get(url)
    data = response.json()

    print(f"ポケモンの名前: {data['name']}")
    print(f"重さ: {data['weight'] / 10} kg")


get_pokemon_info()
