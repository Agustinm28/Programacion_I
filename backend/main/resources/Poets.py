from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import PoetModel

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
        return poet.to_json() , 201

class Poets(Resource):

    def get(self):
        poets = db.session.query(PoetModel).all()
        return jsonify([poet.to_json_short() for poet in poets])

    def post(self):
        poet = PoetModel.from_json(request.get_json())
        db.session.add(poet)
        db.session.commit()
        return poet.to_json() , 201