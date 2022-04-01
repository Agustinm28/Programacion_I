from flask_restful import Resource
from flask import request

POETS = {
    1: {'name': 'Agustin', 'lname': 'Montana', 'user': 'Agustinm28', 'mail': 'agustinm28@gmail.com', 'user_type': 'regular', 'up_poems': 1, 'qual_poems': 5, 
    'can_upload': False},
    2: {'name': 'Bruno', 'lname': 'Orbelli', 'user': 'BOrbelli', 'mail': 'b.orbelli@gmail.com', 'user_type': 'admin', 'up_poems': 2, 'qual_poems': 16, 
    'can_upload': True},
    3: {'name': 'Mauro', 'lname': 'Sarmiento', 'user': 'MSarmiento', 'mail': 'm.sarmiento@gmail.com', 'user_type': 'regular', 'up_poems': 1, 'qual_poems':12, 
    'can_upload': True},
    4: {'name': 'Tobias', 'lname': 'Tkazeck', 'user': 'TTkazeck', 'mail': 't.tazeck@gmail.com', 'user_type': 'regular', 'up_poems': 0, 'qual_poems': 2, 
    'can_upload': False},
}

class Poet(Resource):

    def get(self, id):
        if int(id) in POETS:
            return POETS[int(id)]
        return '', 404

    def delete(self, id):
        if int(id) in POETS:
            del POETS[int(id)]
            return '', 204
        return '', 404

    def put(self, id):
        if int(id) in POETS:
            poet = POETS[int(id)]
            data = request.get_json()
            poet.update(data)
            return poet, 201
        return '', 404

class Poets(Resource):

    def get(self):
        return POETS

    def post(self):
        poet = request.get_json()
        id = int(max(POETS.keys())) + 1
        POETS[id] = poet
        return POETS[id], 201