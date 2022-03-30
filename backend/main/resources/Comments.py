from flask_restful import Resource
from flask import request

COMMENTS = {
    1: {'user': 'Sarmiento Mauro', 'body': 'Nice poem bro!!', 'rating': 4},
    2: {'user': 'Montaña Agustín', 'body': 'Boring', 'rating': 1},
}

class Comment(Resource):
    
    def get(self, id):
        if int(id) in COMMENTS:                                   
            return COMMENTS[int(id)]
        return '', 404

    def delete(self, id):
        if int(id) in COMMENTS:
            del COMMENTS[int(id)]
            return '', 204
        return '', 404

    def put(self, id):
        if int(id) in COMMENTS:
            comm = COMMENTS[int(id)]
            data = request.get_json()
            comm.update(data)
            return comm, 201
        return '', 404

class Comments(Resource):

    def get(self):
        return COMMENTS

    def post(self):
        comm = request.get_json()
        id = int(max(COMMENTS.keys())) + 1
        COMMENTS[id] = comm
        return COMMENTS[id], 201
