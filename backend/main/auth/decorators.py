from .. import jwt
from flask import jsonify
from flask_jwt_extended import verify_jwt_in_request, get_jwt
from functools import wraps

# Decorador para restringir el acceso a usuarios admin
def admin_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        # Verificar que el JWT es correcto
        verify_jwt_in_request()
        # Obtener claims de adentro del JWT
        claims = get_jwt()
        # Verificar que el rol sea admin
        if claims['admin'] == True:
            # Ejecutar función
            return fn(*args, **kwargs)
        else:
            return 'You don\'t have permission to perform this action.', 403
    return wrapper

# Define el atributo que se utilizará para identificar el usuario

def owner_or_admin_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        # Verificar que el JWT es correcto
        verify_jwt_in_request()
        # Obtener claims de adentro del JWT
        claims = get_jwt()
        # Obtener el id del objeto a modificar
        targetId = id
        # Verificar que el rol sea admin
        if claims['id'] == targetId or claims['admin'] == True:
            # Ejecutar función
            return fn(*args, **kwargs)
        else:
            return 'You don\'t have permission to perform this action.', 403
    return wrapper

@jwt.user_identity_loader
def user_identity_lookup(poet):
    # Definir ID como atributo identificatorio
    return poet.id

# Define que atributos se guardarán dentro del token
@jwt.additional_claims_loader
def add_claims_to_access_token(poet):
    claims = {
        'admin': poet.admin,
        'id': poet.id,
        'mail': poet.mail
    }
    return claims
