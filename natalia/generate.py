import os
from pathlib import Path
from typing import List
import json
import http.server
import socketserver
from shutil import copyfile

PORTFOLIO_PATH = './portfolio'
GENERATED_PATH = './app/src/generated'
PUBLIC_PATH = './app/public'
PORTFOLIO_FILENAME = 'portfolio.json'


def get_gallery_names() -> List[str]:
    galleries = list()
    for _, dirs, _ in os.walk(PORTFOLIO_PATH, topdown=False):
        for name in dirs:
            galleries.append(name)
            Path(
                f'{PUBLIC_PATH}/thumbnail/{name}').mkdir(parents=True, exist_ok=True)
            Path(f'{PUBLIC_PATH}/original/{name}').mkdir(parents=True, exist_ok=True)
    return galleries


def get_photos_for_gallery(gallery: str) -> List[str]:
    photos = list()
    path = PORTFOLIO_PATH + '/' + gallery
    for _, _, photo in os.walk(path, topdown=False):
        photos += photo
    for photo in photos:
        copyfile(path + '/' + photo,
                 f'{PUBLIC_PATH}/thumbnail/{gallery}/{photo}')
        copyfile(path + '/' + photo,
                 f'{PUBLIC_PATH}/original/{gallery}/{photo}')
    return photos


def generate_portfolio() -> dict:
    # iterate folders and photos
    galleries = get_gallery_names()
    return [{'gallery': g, 'photos': get_photos_for_gallery(g)} for g in galleries]


def generate_dirs():
    """create generated folder if not exists"""
    Path(GENERATED_PATH).mkdir(parents=True, exist_ok=True)
    Path(PUBLIC_PATH+'/thumbnail').mkdir(parents=True, exist_ok=True)
    Path(PUBLIC_PATH+'/original').mkdir(parents=True, exist_ok=True)


def output_portfolio():
    """dumps portfolio json"""
    portfolio = generate_portfolio()
    with open(GENERATED_PATH + '/' + PORTFOLIO_FILENAME, mode='w') as f:
        json.dump(portfolio, f)


# def serve_debug(port: int = 8000):
#     Handler = http.server.SimpleHTTPRequestHandler
#     with socketserver.TCPServer(("", port), Handler) as server:
#         print("serving at port", port)
#         server.serve_forever()


if __name__ == "__main__":
    generate_dirs()
    output_portfolio()
    # serve_debug()
