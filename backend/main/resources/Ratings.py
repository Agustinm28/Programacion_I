from flask_restful import Resource
from flask import request

RATINGS = {
    1: {'fk_user': 2, 'fk_poem': 1 , 'body': 'Nice poem bro!!', 'rating': 4},
    2: {'fk_user': 1, 'fk_poem': 2, 'body': 'Boring', 'rating': 1},
}

class Rating(Resource):
    
    def get(self, id):
        if int(id) in RATINGS:                                   
            return RATINGS[int(id)]
        return '', 404

    def delete(self, id):
        if int(id) in RATINGS:
            del RATINGS[int(id)]
            return '', 204
        return '', 404

class Ratings(Resource):

    def get(self):
        return RATINGS
        
    def post(self):
        rat = request.get_json()
        id = int(max(RATINGS.keys())) + 1
        RATINGS[id] = rat
        return RATINGS[id], 201
