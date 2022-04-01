import os
from flask import Flask
from dotenv import load_dotenv
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
import main.resources as resources
api = Api()
db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    load_dotenv()

    if not os.path.exist(os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME')):     #* Si no existe el archivo de base de datos, lo crea
        os.mknod(os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME'))

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////'+os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME')    #* Url de configuración de base de datos
    db.init_app(app)

    api.add_resource(resources.PoemsResource, '/poem')
    api.add_resource(resources.PoemResource, '/poem/<id>')
    api.add_resource(resources.PoetsResource, '/poet')
    api.add_resource(resources.PoetResource, '/poet/<id>')
    api.add_resource(resources.RatingsResource, '/rating')
    api.add_resource(resources.RatingResource, '/rating/<id>')
    api.init_app(app)
    return app