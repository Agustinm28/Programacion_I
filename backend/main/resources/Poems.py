from collections import UserDict
from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import PoemModel, RatingModel, PoetModel
from sqlalchemy import func
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from main.auth.decorators import admin_required

class Poem(Resource):

    @jwt_required(optional = True)
    def get(self, id):
        poem = db.session.query(PoemModel).get_or_404(id)
        current_identity = get_jwt_identity()
        if current_identity:
            return poem.to_json()
        else:
            return poem.to_json_public()

    @jwt_required()
    def delete(self, id):
        poetId = get_jwt_identity()
        poem = db.session.query(PoemModel).get_or_404(id)
        claims = get_jwt()
        if poem.poet_id == poetId or claims['admin'] == True:        
            db.session.delete(poem)
            db.session.commit()
            return 'Poem deleted.', 204
        return 'You don\'t have permission to perform this action.', 403

    @jwt_required()
    def put(self, id):
        poetId = get_jwt_identity()
        poem = db.session.query(PoemModel).get_or_404(id)
        claims = get_jwt()
        if poem.poet_id == poetId or claims['admin'] == True:
            data = request.get_json().items()
            for key, value in data:
                setattr(poem, key, value)
            db.session.add(poem)
            db.session.commit()
            return poem.to_json(), 201
        return 'You don\'t have permission to perform this action.', 403

class Poems(Resource):

    @jwt_required(optional = True)
    def get(self):
        userId = get_jwt_identity()
        if not userId:
            userId = -1
        # Pagina inicial por defecto
        page = 1
        # Cantidad de elementos a mostrar por página por defecto
        per_page = 5
        # Obtener valores del request
        filters = request.get_json().items() if userId == -1 else {'order_by': 'date[desc]', 'order_by': 'ratings_count'}
        poems = db.session.query(PoemModel)
        # Verificar si hay filtros
        if filters:
            # Recorrer filtros
            actions = {
                'poet_id': 'poems.filter(PoemModel.poet_id == value)',
                'date[gte]': 'poems.filter(PoemModel.date >= value)',
                'date[lte]': 'poems.filter(PoemModel.date <= value)',
                'title': 'poems.filter(PoemModel.title.like("%"+value+"%"))',
                'av_rating[gte]': 'poems.outerjoin(PoemModel.rating).group_by(PoemModel.id).having(func.avg(RatingModel.rating) >= value)',
                'av_rating[lte]': 'poems.outerjoin(PoemModel.rating).group_by(PoemModel.id).having(func.avg(RatingModel.rating) <= value)',
                'ratings_count[gte]': 'poems.outerjoin(PoemModel.rating).group_by(PoetModel.id).having(func.count(RatingModel.id) >= value)',
                'ratings_count[lte]': 'poems.outerjoin(PoemModel.rating).group_by(PoetModel.id).having(func.count(RatingModel.id) <= value)',
                'order_by': {
                    'date': 'poems.order_by(PoemModel.date)',
                    'date[desc]': 'poems.order_by(PoemModel.date.desc())',
                    'av_rating': 'poems.outerjoin(PoemModel.rating).group_by(PoemModel.id).order_by(func.avg(RatingModel.rating))',
                    'av_rating[desc]': 'poems.order_by(func.avg(RatingModel.rating).desc())',
                    'title': 'poems.order_by(PoemModel.title)',
                    'title[desc]': 'poems.order_by(PoemModel.title.desc())',
                    'ratings_count': 'poems.outerjoin(PoemModel.rating).group_by(PoetModel.id).order_by(func.count(PoemModel.rating))',
                    'ratings_count[desc]': 'poets.order_by(func.count(PoemModel.rating).desc())'
                }
            }

            for key, value in filters:
                if key == 'page':
                    page = int(value)
                elif key == 'per_page':
                    per_page = int(value)
                else:
                    # en lugar de usar if, almacena todas las opciones en un diccionario
                    # y devuele el filtro seleccionado indexándolo con la llave y el valor
                    # para luego ejecutar la consulta con la función "eval"
                    poems = eval(actions[key]) if key != 'order_by' else eval(
                        actions[key][value])

       # Obtener valor paginado
        poems = poems.paginate(page, per_page, True, 20)
        poemList = [poem.to_json() for poem in poems.items if poem.poet_id != userId] if userId else [poem.to_json_public() for poem in poems.items if poem.poet_id != userId]
        return jsonify({'poem': poemList,
                        'total': poems.total,
                        'pages': poems.pages,
                        'page': page
                        })

    @jwt_required()
    def post(self):
        poem = PoemModel.from_json(request.get_json())
        poems = db.session.query(PoemModel)
        ratings = db.session.query(RatingModel)
        current_user = get_jwt_identity()
        poem_count = len([poem.to_json() for poem in poems.filter(PoemModel.poet_id == current_user)])
        rating_count = len([rating.to_json() for rating in ratings.filter(RatingModel.poet == current_user)])
        if poem_count > 3 and rating_count < (poem_count - 3) * 5:
            return 'You need to rate more poems before posting a new one.', 400
        poem.poet_id = current_user
        try:
            db.session.add(poem)
            db.session.commit()
        except:
            return 'Non valid format', 400
        return poem.to_json(), 201
