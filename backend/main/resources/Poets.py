from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import PoetModel, PoemModel, RatingModel
from sqlalchemy import func
'''
Poeta: nombre(asc,desc), cantidad de poemas(asc,desc), cantidad de reseñas(asc,desc).
'''


class Poet(Resource):

    def get(self, id):
        poet = db.session.query(PoetModel).get_or_404(id)
        return poet.to_json()

    def delete(self, id):
        poet = db.session.query(PoetModel).get_or_404(id)
        db.session.delete(poet)
        db.session.commit()
        return '', 204

    def put(self, id):
        poet = db.session.query(PoetModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(poet, key, value)
        db.session.add(poet)
        db.session.commit()
        return poet.to_json(), 201


class Poets(Resource):

    def get(self):
        # Pagina inicial por defecto
        page = 1
        # Cantidad de paginas por defecto a mostrar
        per_page = 5
        # Obtener valores del request
        filters = request.get_json().items()
        poets = db.session.query(PoetModel)
        # Verificar si hay filtros
        if filters:
            # Recorrer filtros
            actions = {
                'name': 'poets.filter(PoetModel.name.like("%"+value+"%"))',
                'poems_count[gte]': 'poets.outerjoin(PoetModel.poems).group_by(PoetModel.id).having(func.count(PoemModel.id) >= value)',
                'poems_count[lte]': 'poets.outerjoin(PoetModel.poems).group_by(PoetModel.id).having(func.count(PoemModel.id) >= value)',
                'ratings_count[gte]': 'poets.outerjoin(PoetModel.rating).group_by(PoetModel.id).having(func.count(RatingModel.id) >= value)',
                'ratings_count[lte]': 'poets.outerjoin(PoetModel.rating).group_by(PoetModel.id).having(func.count(RatingModel.id) <= value)',
                'order_by': {
                    'name': 'poets.order_by(PoetModel.name)',
                    'name[desc]': 'poets.order_by(PoetModel.name.desc())',
                    'poems_count': 'poets.outerjoin(PoetModel.poems).group_by(PoetModel.id).order_by(func.count(PoetModel.id))',
                    'poems_count[desc]': 'poets.order_by(func.count(PoetModel.id).desc())',
                    'ratings_count': 'poets.outerjoin(PoetModel.rating).group_by(PoetModel.id).order_by(func.count(PoetModel.id))',
                    'ratings_count[desc]': 'poets.order_by(func.count(PoetModel.rating).desc())'
                }
            }
            
            # Paginacion
            for key, value in filters:
                if key == 'page':
                    page = int(value)
                elif key == 'per_page':
                    per_page = int(value)
                else:
                
                '''if key == 'name':
                    poets = poets.filter(PoetModel.name.like('%'+value+'%'))
                if key == 'poems_count[gte]':
                    poets = poets.outerjoin(PoetModel.poems).group_by(
                        PoetModel.id).having(func.count(PoemModel.id) >= value)
                if key == 'poems_count[lte]':
                    poets = poets.outerjoin(PoetModel.poems).group_by(
                        PoetModel.id).having(func.count(PoemModel.id) <= value)
                if key == 'ratings_count[gte]':
                    poets = poets.outerjoin(PoetModel.rating).group_by(
                        PoetModel.id).having(func.count(RatingModel.id) >= value)
                if key == 'ratings_count[lte]':
                    poets = poets.outerjoin(PoetModel.rating).group_by(
                        PoetModel.id).having(func.count(RatingModel.id) <= value)
                if key == 'order_by':
                    if value == 'name':
                        poets = poets.order_by(PoetModel.name)
                    if value == 'name[desc]':
                        poets = poets.order_by(PoetModel.name.desc())
                    if value == 'poems_count':
                        poets = poets.outerjoin(PoetModel.poems).group_by(PoetModel.id).order_by(func.count(PoetModel.id))
                    if value == 'poems_count[desc]':
                        poets = poets.order_by(func.count(PoetModel.id).desc())
                    if value == 'ratings_count':
                        poets = poets.outerjoin(PoetModel.rating).group_by(PoetModel.id).order_by(func.count(PoetModel.id))
                    if value == 'ratings_count[desc]':
                        poets = poets.order_by(func.count(PoetModel.rating).desc())'''
        
        # Obtener valor paginado
        poets = poets.paginate(page, per_page, True, 20)
        return jsonify({'poet': [poet.to_json() for poet in poets.items],
                        'total': poets.total,
                        'pages': poets.pages,
                        'page': page
                        })

    def post(self):
        poet = PoetModel.from_json(request.get_json())
        db.session.add(poet)
        db.session.commit()
        return poet.to_json(), 201
