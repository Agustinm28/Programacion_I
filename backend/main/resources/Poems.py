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
        # Pagina inicial por defecto
        page = 1
        # Cantidad de elementos a mostrar por página por defecto
        per_page = 5
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
                    'title': 'poems.filter(PoemModel.title.like("%"+value+"%"))',
                    'av_rating[gte]': 'poems.outerjoin(PoemModel.rating).group_by(PoemModel.id).having(func.avg(RatingModel.rating) >= value)',
                    'av_rating[lte]': 'poems.outerjoin(PoemModel.rating).group_by(PoemModel.id).having(func.avg(RatingModel.rating) <= value)',
                    'order_by': {
                        'date': 'poems.order_by(PoemModel.date)',
                        'date[desc]': 'poems.order_by(PoemModel.date.desc())',
                        'av_rating': 'poems.outerjoin(PoemModel.rating).group_by(PoemModel.id).order_by(func.avg(RatingModel.rating))',
                        'av_rating[desc]': 'poems.order_by(func.avg(RatingModel.rating).desc())',
                        'title': 'poems.order_by(PoemModel.title)',
                        'title[desc]': 'poems.order_by(PoemModel.title.desc())'
                    }
                }
            
            for key, value in request.get_json().items():
                if key == 'page':
                    page = int(value)
                elif key == 'per_page':
                    per_page = int(value)
                else:
                    # en lugar de usar if, almacena todas las opciones en un diccionario
                    # y devuele el filtro seleccionado indexándolo con la llave y el valor
                    # para luego ejecutar la consulta con la función "eval"
                    poems = eval(actions[key]) if key != 'order_by' else eval(actions[key][value])        
        
        # Obtener valor paginado
        poems = poems.paginate(page, per_page, True, 20)
        return jsonify({'poem': [poem.to_json() for poem in poems.items],
                        'total': poems.total,
                        'pages': poems.pages,
                        'page': page
                        })

    def post(self):
        poem = PoemModel.from_json(request.get_json())
        try:
            db.session.add(poem)
            db.session.commit()
        except:
            return 'Formato no valido', 400
        return poem.to_json(), 201
