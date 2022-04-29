from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import PoetModel, PoemModel, RatingModel
from sqlalchemy import func
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import admin_required


class Poet(Resource):

    @jwt_required()
    def get(self, id):
        poet = db.session.query(PoetModel).get_or_404(id)
        return poet.to_json()

    @jwt_required()
    def delete(self, id):
        poet = db.session.query(PoetModel).get_or_404(id)
        db.session.delete(poet)
        db.session.commit()
        return '', 204

    @jwt_required()
    def put(self, id):
        poet = db.session.query(PoetModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(poet, key, value)
        db.session.add(poet)
        db.session.commit()
        return poet.to_json(), 201


class Poets(Resource):

    @jwt_required()
    def get(self):
        # Pagina inicial por defecto
        page = 1
        # Cantidad de paginas por defecto a mostrar
        per_page = 5
        poets = db.session.query(PoetModel)
        if request.get_json():
            filters = request.get_json().items()
            # Paginacion
            for key, value in filters:
                if key == 'page':
                    page = int(value)
                if key == 'per page':
                    per_page = int(value)
                if key == 'name':
                    poets = poets.filter(PoetModel.name.like('%'+value+'%'))
                if key == 'poems_count':
                    poets = poets.outerjoin(PoetModel.poems).group_by(
                        PoetModel.id).having(func.count(PoemModel.id) >= value)
                if key == 'ratings_count':
                    poets = poets.outerjoin(PoetModel.rating).group_by(
                        PoetModel.id).having(func.count(RatingModel.id) >= value)
                if key == "order_by":
                    if value == 'name[desc]':
                        poets = poets.order_by(PoetModel.name.desc())
                    if value == 'name':
                        poets = poets.order_by(PoetModel.name)
                    if value == 'poems_count[desc]':
                        poets = poets.order_by(PoetModel.poets.desc())
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
