import os
from flask import Flask
from dotenv import load_dotenv
from flask_restful import Api
import main.resources as resources
api = Api()

def create_app():
    app = Flask(__name__)
    load_dotenv()
    api.add_resource(resources.PoemsResource, '/poem')
    api.add_resource(resources.PoemResource, '/poem/<id>')
    api.add_resource(resources.PoetsResource, '/poet')
    api.add_resource(resources.PoetResource, '/poet/<id>')
    api.init_app(app)
    return app