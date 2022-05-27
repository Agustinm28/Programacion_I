import os
from flask import Flask
from dotenv import load_dotenv
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_mail import Mail

api = Api()
db = SQLAlchemy()
jwt = JWTManager()
mailsender = Mail()


def create_app():
    app = Flask(__name__)
    app.config['JSON_SORT_KEYS'] = False
    load_dotenv()
    import main.resources as resources

    # * Si no existe el archivo de base de datos, lo crea
    if not os.path.exists(os.getenv('DATABASE_PATH') + os.getenv('DATABASE_NAME')):
        os.mknod(os.getenv('DATABASE_PATH') + os.getenv('DATABASE_NAME'))

    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////'+os.getenv(
        'DATABASE_PATH')+os.getenv('DATABASE_NAME')  # * Url de configuración de base de datos
    db.init_app(app)

    import main.resources as resources

    api.add_resource(resources.PoemsResource, '/poem')
    api.add_resource(resources.PoemResource, '/poem/<id>')
    api.add_resource(resources.PoetsResource, '/poet')
    api.add_resource(resources.PoetResource, '/poet/<id>')
    api.add_resource(resources.RatingsResource, '/rating')
    api.add_resource(resources.RatingResource, '/rating/<id>')
    api.init_app(app)
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = int(
        os.getenv('JWT_ACCESS_TOKEN_EXPIRES'))
    jwt.init_app(app)
    from main.auth import routes
    app.register_blueprint(routes.auth)

    app.config['PROPAGATE_EXCEPTIONS'] = True

    app.config['MAIL_HOSTNAME'] = os.getenv('MAIL_HOSTNAME')
    app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
    app.config['MAIL_PORT'] = os.getenv('MAIL_PORT')
    app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS')
    app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
    app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
    app.config['FLASKY_MAIL_SENDER'] = os.getenv('FLASKY_MAIL_SENDER')

    mailsender.init_app(app)

    return app
