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
            actions = {
                    'poet_id': 'poems.filter(PoemModel.poet_id == value)',
                    'date[gte]': 'poems.filter(PoemModel.date >= value)',
                    'date[lte]': 'poems.filter(PoemModel.date <= value)',
                    'title': 'poems = poems.filter(PoemModel.title.like("%" + value + "%"))',
                    'av_rating[gte]': 'poems.outerjoin(PoemModel.rating).group_by(PoemModel.id).having((func.sum(RatingModel.rating) / func.count(RatingModel.id)) >= value)',
                    'av_rating[lte]': 'poems.outerjoin(PoemModel.rating).group_by(PoemModel.id).having((func.sum(RatingModel.rating) / func.count(RatingModel.id)) <= value)',
                    'order_by': {
                        'date[desc]': 'poems.order_by(PoemModel.date.desc())',
                        'date': 'poems.order_by(PoemModel.date)',
                        'av_rating': 'poems.outerjoin(PoemModel.rating).group_by(PoemModel.id).order_by(func.sum(RatingModel.rating) / func.count(RatingModel.id))',
                        'av_rating[desc]': 'poems.order_by(func.sum(RatingModel.rating) / func.count(RatingModel.id).desc())',
                    }
                }
            
            for key, value in request.get_json().items():
                poems = eval(actions[key]) if key != 'order_by' else eval(actions[key][value]) # en lugar de usar ifs, almacena todas las opciones en un diccionario
                                                                                               # y devuele el filtro seleccionado indexándolo con la llave y el valor
                                                                                               # para luego ejecutarlo con la función "eval"
                '''if key == 'poet_id':
                    poems = poems.filter(PoemModel.poet_id == value)
                if key == 'date[gte]':
                    poems = poems.filter(PoemModel.date >= value)
                if key == 'date[lte]':
                    poems = poems.filter(PoemModel.date <= value)
                if key == 'title':
                    poems = poems.filter(PoemModel.title.like('%'+value+'%'))
                if key == 'av_rating[gte]':
                    poems = poems.outerjoin(PoemModel.rating).group_by(
                        PoemModel.id).having(func.sum(RatingModel.rating) / func.count(RatingModel.id) >= value)
                if key == 'av_rating[lte]':
                    poems = poems.outerjoin(PoemModel.rating).group_by(
                        PoemModel.id).having(func.sum(RatingModel.rating) / func.count(RatingModel.id) <= value)
                if key == 'order_by':
                    if value == 'date[desc]':
                        poems = poems.order_by(PoemModel.date.desc())
                    if value == 'date':
                        poems = poems.order_by(PoemModel.date)
                    if value == 'av_rating[desc]':
                        poems = poems.order_by(func.count(PoemModel.id).desc())
                    if value == 'av_rating':
                        poems = poems.outerjoin(PoemModel.id).group_by(PoemModel.id).order_by(func.count(PoemModel.id))'''
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
