from flask import request, jsonify, Blueprint
from .. import db
from main.models import PoetModel
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from main.mail.functions import sendMail

# Blueprint para acceder a los métodos de autenticación
auth = Blueprint('auth', __name__, url_prefix='/auth')

# Método de logueo


@auth.route('/login', methods=['POST'])
def login():
    # Busca al poet en la db por mail
    poet = db.session.query(PoetModel).filter(
        PoetModel.mail == request.get_json().get("mail")).first_or_404()
    # Valida la contraseña
    if poet.validate_pass(request.get_json().get("passw")):
        # Genera un nuevo token
        # Pasa el objeto professor como identidad
        access_token = create_access_token(identity=poet)
        # Devolver valores y token
        data = {
            'id': poet.id,
            'user': poet.name,
            'mail': poet.mail,
            'access_token': access_token
        }

        return data, 200
    else:
        return 'Incorrect password', 401


@auth.route('/register', methods=['POST'])
def register():
    poet = PoetModel.from_json(request.get_json())
    exists = db.session.query(PoetModel).filter(
        PoetModel.email == poet.email).scalar() is not None
    if exists:
        return 'Duplicated mail', 409
    else:
        try:
            db.session.add(poet)
            db.session.commit()
            # Enviar mail de bienvenida
            sent = sendMail([poet.email], "Welcome!",
                            'register', professor=poet)
        except Exception as error:
            db.session.rollback()
            return str(error), 409
        return poet.to_json(), 201
