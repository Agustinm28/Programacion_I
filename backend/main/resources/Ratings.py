from flask_restful import Resource
from flask import jsonify, request
from .. import db
from main.models import RatingModel
from flask_jwt_extended import jwt_required, get_jwt_identity
from main.auth.decorators import admin_required


class Rating(Resource):

    @jwt_required(optional = True)
    def get(self, id):
        rating = db.session.query(RatingModel).get_or_404(id)
        return rating.to_json_short()

    @admin_required
    def delete(self, id):
        rating = db.session.query(RatingModel).get_or_404(id)
        db.session.delete(rating)
        db.session.commit()
        return '', 204

class Ratings(Resource):

    @jwt_required()
    def get(self):
        # Pagina inicial por defecto
        page = 1
        # Cantidad de elementos a mostrar por página por defecto
        per_page = 5
        # Obtener valores del request
        filters = request.data
        ratings = db.session.query(RatingModel)
        # Verificar si hay filtros
        if filters:
            for key, value in request.get_json().items():
                if key == 'page':
                    page = int(value)
                elif key == 'per_page':
                    per_page = int(value)

        # Obtener valor paginado
        ratings = ratings.paginate(page, per_page, True, 20)
        return jsonify({'rating': [rating.to_json() for rating in ratings.items],
                        'total': ratings.total,
                        'pages': ratings.pages,
                        'page': page
                        })

    @jwt_required()
    def post(self):
        rating = RatingModel.from_json(request.get_json())
        db.session.add(rating)
        db.session.commit()
        return rating.to_json(), 201
