from flask_restful import Resource
from flask import jsonify, request
from .. import db
from main.models import RatingModel

class Rating(Resource):
    
    def get(self, id):
        rating = db.session.query(RatingModel).get_or_404(id)
        return rating.to_json_short()

    def delete(self, id):
        rating = db.session.query(RatingModel).get_or_404(id)
        db.session.delete(rating)
        db.session.commit()
        return '', 204

class Ratings(Resource):

    def get(self):
        ratings = db.session.query(RatingModel).all()
        return jsonify([rating.to_json_short() for rating in ratings])
        
    def post(self):
        rating = RatingModel.from_json(request.get_json())
        db.session.add(rating)
        db.session.commit()
        return rating.to_json(), 201
