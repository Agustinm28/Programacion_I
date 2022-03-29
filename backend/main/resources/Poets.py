from flask_restful import Resource
from flask import request

POETS = {
    1: {'name': 'Agustin', 'lname': 'Montaña', 'user': 'Agustinm28', 'mail': 'agustinm28@gmail.com', 'user_type': 'regular'},
    2: {'name': 'Bruno', 'lname': 'Orbelli', 'user': 'BOrbelli', 'mail': 'b.orbelli@gmail.com', 'user_type': 'admin'},
    3: {'name': 'Mauro', 'lname': 'Sarmiento', 'user': 'MSarmiento', 'mail': 'm.sarmiento@gmail.com', 'user_type': 'regular'},
    4: {'name': 'Tobias', 'lname': 'Tazeck', 'user': 'TTazeck', 'mail': 't.tazeck@gmail.com', 'user_type': 'regular'},
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
        return 'User deleted', 404

    def put(self, id):
        if int(id) in POETS:
            poem = POETS[int(id)]
            data = request.get_json()
            poem.update(data)
            return poem, 201
        return '', 404

class Poets(Resource):

    def get(self):
        return POETS

    def post(self):
        poem = request.get_json()
        id = int(max(POETS.keys())) + 1
        POETS[id] = poem
        return POETS[id], 201