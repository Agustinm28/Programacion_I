from flask_restful import Resource
from flask import request

POEMS = {
    1: {'title': 'prueba', 'body': 'Lorem ipsum', 'date': '22/02/2022', 'av_rating' : 4.2, 'fk_author': 1},
    2: {'title': 'prueba1', 'body': 'Lorem ipsum', 'date': '04/08/2021', 'av_rating' : 3.6, 'fk_author': 3},
}

class Poem(Resource):
    
    def get(self, id):
        if int(id) in POEMS:                                   
            return POEMS[int(id)]
        return '', 404

    def delete(self, id):
        if int(id) in POEMS:
            del POEMS[int(id)]
            return '', 204
        return '', 404

    def put(self, id):
        if int(id) in POEMS:
            poem = POEMS[int(id)]
            data = request.get_json()
            poem.update(data)
            return poem, 201
        return '', 404

class Poems(Resource):

    def get(self):
        return POEMS

    def post(self):
        poem = request.get_json()
        id = int(max(POEMS.keys())) + 1
        POEMS[id] = poem
        return POEMS[id], 201
