from smtplib import SMTPException
from flask_restful import Resource
from flask import jsonify, request
from .. import db
from main.models import RatingModel, PoemModel, PoetModel
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from main.auth.decorators import admin_required
from main.mail.functions import sendMail


class Rating(Resource):

    @jwt_required(optional=True)
    def get(self, id):
        rating = db.session.query(RatingModel).get_or_404(id)
        current_identity = get_jwt_identity()
        print(current_identity)
        if current_identity != None:
            return rating.to_json()
        else:
            return rating.to_json_public()

    @jwt_required()
    def delete(self, id):
        user_id = get_jwt_identity()
        rating = db.session.query(RatingModel).get_or_404(id)
        claims = get_jwt()
        if rating.poet_id == user_id or claims['admin']:
            db.session.delete(rating)
            db.session.commit()
            return 'Rating deleted correctly', 204
        else:
            return 'You don\'t have permission to perform this action.', 403


class Ratings(Resource):

    @jwt_required(optional=True)
    def get(self):
        # Pagina inicial por defecto
        page = 1
        # Cantidad de elementos a mostrar por página por defecto
        per_page = 5
        user_id = get_jwt_identity()
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
                # if not user_id:

        # Obtener valor paginado
        ratings = ratings.paginate(page, per_page, True, 20)
        ratingList = [rating.to_json() for rating in ratings.items] if user_id is not None else [
            rating.to_json_public() for rating in ratings.items]
        return jsonify({'rating': ratingList,
                        'total': ratings.total,
                        'pages': ratings.pages,
                        'page': page
                        })

    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        rating = RatingModel.from_json(request.get_json())
        rating.poet_id = user_id
        print(rating.poet_id)
        print(rating.poem_id)
        poem = db.session.query(PoemModel).get(rating.poem_id)
        ratings = db.session.query(RatingModel).filter(
            RatingModel.poem_id == rating.poem_id)
        user_ratings = [
            rating.to_json_rate() for rating in ratings if rating.poet_id == user_id
        ]
        if poem.poet_id == user_id:
            return 'You can\'t rate your own poems.', 400
        elif len(user_ratings) > 0:
            return 'You have already rated this poem.', 400
        try:
            db.session.add(rating)
            db.session.commit()
            result = sendMail([rating.poem.poet.mail],
                              'New Review', 'new_review', review = rating)
        except Exception as error:
            print(error)
            return 'Incorrect format.', 400
        return rating.to_json(), 201
