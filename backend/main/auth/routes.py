from flask import request, jsonify, Blueprint
from .. import db
from main.models import PoetModel
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

# Blueprint para acceder a los métodos de autenticación
auth = Blueprint('auth', __name__, url_prefix = '/auth')

# Método de logueo
@auth.route('/login', methods = ['POST'])
def login():
    # Busca al poet en la db por mail
    poet = db.session.query(PoetModel).filter(
        PoetModel.email == request.get_json().get("mail")).first_or_404()
    # Valida la contraseña
    if poet.validate_pass(request.get_json().get("password")):
        # Genera un nuevo token
        # Pasa el objeto professor como identidad
        access_token = create_access_token(identity = poet)
        # Devolver valores y token
        data = {
            'id': str(poet.id),
            'mail': poet.mail,
            'access_token': access_token
        }

        return data, 200
    else:
        return 'Incorrect password', 401