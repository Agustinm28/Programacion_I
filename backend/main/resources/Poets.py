from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import PoetModel, PoemModel, RatingModel
from sqlalchemy import func
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from main.auth.decorators import admin_required

class Poet(Resource):

    @jwt_required(optional = True)
    def get(self, id):
        poet = db.session.query(PoetModel).get_or_404(id)
        poetId = get_jwt_identity()
        claims = get_jwt()
        if claims != {}:
            if poetId == int(id) or claims['admin'] == True:
                return poet.to_json()
        return poet.to_json_public()

    @admin_required
    def delete(self, id):
        poet = db.session.query(PoetModel).get_or_404(id)
        db.session.delete(poet)
        db.session.commit()
        return 'Poet deleted', 204

    @jwt_required()
    def put(self, id):
        poet = db.session.query(PoetModel).get_or_404(id)
        data = request.get_json().items()
        poetId = get_jwt_identity()
        claims = get_jwt()
        if poet.id == poetId or claims['admin'] == True:
            data = request.get_json().items()
            for key, value in data:
                if claims['activated'] == False or (key in ('admin','activated') and claims['admin'] == False):
                    return 'You don\'t have permission to perform this action.', 403
                setattr(poet, key, value)
            db.session.add(poet)
            db.session.commit()
            return poet.to_json(), 201
        return 'You don\'t have permission to perform this action.', 403

class Poets(Resource):

    @jwt_required(optional = True)
    def get(self):
        userId = get_jwt_identity()
        claims = get_jwt()
        # Pagina inicial por defecto
        page = 1
        # Cantidad de elementos a mostrar por página por defecto
        per_page = 5
        # Obtener valores del request
        keys = [
            'page',
            'per_page',
            'uname',
            'poems_count[gte]',
            'poems_count[lte]',
            'ratings_count[gte]',
            'ratings_count[lte]',
            'is_activated',
            'order_by'
        ]
        
        #Obtiene los filtros especificados de la URL
        filters = {}
        for key in keys:
            arg = request.args.get(key)
            if arg != None:
                filters.update({key: int(arg) if arg.isnumeric() else arg})

        poets = db.session.query(PoetModel)
        # Verificar si hay filtros
        if filters:
            # Recorrer filtros
            actions = {
                'uname': 'poets.filter(PoetModel.uname.like("%"+value+"%"))',
                'poems_count[gte]': 'poets.outerjoin(PoetModel.poems).group_by(PoetModel.id).having(func.count(PoemModel.id) >= value)',
                'poems_count[lte]': 'poets.outerjoin(PoetModel.poems).group_by(PoetModel.id).having(func.count(PoemModel.id) <= value)',
                'ratings_count[gte]': 'poets.outerjoin(PoetModel.rating).group_by(PoetModel.id).having(func.count(RatingModel.id) >= value)',
                'ratings_count[lte]': 'poets.outerjoin(PoetModel.rating).group_by(PoetModel.id).having(func.count(RatingModel.id) <= value)',
                'is_activated': 'poets.filter(PoetModel.activated == value)',
                'order_by': {
                    'uname': 'poets.order_by(PoetModel.uname)',
                    'uname[desc]': 'poets.order_by(PoetModel.uname.desc())',
                    'poems_count': 'poets.outerjoin(PoetModel.poems).group_by(PoetModel.id).order_by(func.count(PoetModel.poems))',
                    'poems_count[desc]': 'poets.outerjoin(PoetModel.poems).group_by(PoetModel.id).order_by(func.count(PoetModel.poems).desc())',
                    'ratings_count': 'poets.outerjoin(PoetModel.rating).group_by(PoetModel.id).order_by(func.count(PoetModel.rating))',
                    'ratings_count[desc]': 'poets.outerjoin(PoetModel.rating).group_by(PoetModel.id).order_by(func.count(PoetModel.rating).desc())'
                }
            }

            # Paginacion
            for key, value in filters.items():
                if key == 'page':
                    page = int(value)
                elif key == 'per_page':
                    per_page = int(value)
                else:
                    # en lugar de usar if, almacena todas las opciones en un diccionario
                    # y devuele el filtro seleccionado indexándolo con la llave y el valor
                    # para luego ejecutar la consulta con la función "eval"
                    poets = eval(actions[key]) if key != 'order_by' else eval(
                        actions[key][value])

        # Obtener valor paginado
       
        poets = poets.paginate(page, per_page, True, 20)
        if claims != {}:
            poetList = [poet.to_json() for poet in poets.items] if userId is not None and claims['admin'] == True else [poet.to_json_public() for poet in poets.items]
        return jsonify({'poet': poetList,
                        'total': poets.total,
                        'pages': poets.pages,
                        'page': page
                        })

    @jwt_required(optional = True)
    def post(self):
        poet = PoetModel.from_json(request.get_json())
        poets = db.session.query(PoetModel)
        sameMail, sameUser = poets.filter(PoetModel.mail.like(poet.mail)), poets.filter(PoetModel.uname.like(poet.uname))
        if len([poet.to_json() for poet in sameMail]) > 0:
            return 'Mail already taken', 400
        if len([poet.to_json() for poet in sameUser]) > 0:
            return 'Username already taken', 400
        poet.admin, poet.activated = False, False
        db.session.add(poet)
        db.session.commit()
        return poet.to_json(), 201
