from flask_restful import Resource
from flask import request, jsonify
from .. import db
from main.models import PoemModel, RatingModel
from sqlalchemy import func


class Poem(Resource):

    def get(self, id):
        poem = db.session.query(PoemModel).get_or_404(id)
        return poem.to_json()

    def delete(self, id):
        poem = db.session.query(PoemModel).get_or_404(id)
        db.session.delete(poem)
        db.session.commit()
        return '', 204

    def put(self, id):
        poem = db.session.query(PoemModel).get_or_404(id)
        data = request.get_json().items()
        for key, value in data:
            setattr(poem, key, value)
        db.session.add(poem)
        db.session.commit()
        return poem.to_json(), 201


class Poems(Resource):

    def get(self):
        # Obtener valores del request
        filters = request.data
        poems = db.session.query(PoemModel)
        # Verificar si hay filtros
        if filters:
            # Recorrer filtros
            for key, value in request.get_json().items():
                if key == 'poetid':
                    poems = poems.filter(PoemModel.poet_id == value)
                if key == 'date':
                    poems = poems.filter(PoemModel.date == value)
                if key == 'title':
                    poems = poems.filter(PoemModel.title == value)
                if key == 'av_rating':
                    poems = poems.outerjoin(PoemModel.rating).group_by(
                        PoemModel.id).having(func.count(RatingModel.id) >= value)
                if key == "order_by":
                    if value == 'date[desc]':
                        poems = poems.order_by(PoemModel.date.desc())
                    if value == 'date':
                        poems = poems.order_by(PoemModel.date)
                    if value == 'av_rating[desc]':
                        poems = poems.order_by(PoemModel.rating.desc())
                    if value == 'av_rating':
                        poems = poems.order_by(PoemModel.rating)
        poems = poems.all()
        return jsonify({'poems': [poem.to_json() for poem in poems]})

    def post(self):
        poem = PoemModel.from_json(request.get_json())
        try:
            db.session.add(poem)
            db.session.commit()
        except:
            return 'Formato no valido', 400
        return poem.to_json(), 201
