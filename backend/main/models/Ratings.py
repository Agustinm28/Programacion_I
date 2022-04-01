from .. import db


class Rating(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    poet_id = db.Column(db.Integer, nullable=False)
    poem_id = db.Column(db.Integer, nullable=False)
    body = db.Column(db.String(140), nullable=False)
    rating = db.Column(db.Integer, nullable=False)  

    def __repr__(self):
        return f'Rating: {self.poet_id}: {self.body}, {self.rating} in {self.poem_id}' (self.poet_id, self.poem_id, self.body, self.rating)

    def to_json(self):
        rating_json = {
            'id': self.id,
            'poet_id': self.poet_id,
            'poem_id': self.poem_id,
            'body': str(self.body),
            'rating': self.rating
        }
        return rating_json

    def to_json_short(self):
        rating_json = {
            'id': self.id,
            'poem_id': self.poem_id,
            'rating': self.rating
        }

        return rating_json

    @staticmethod
    def from_json(rating_json):
        id = rating_json.get('id')
        poet_id = rating_json.get('poet_id')
        poem_id = rating_json.get('poem_id')
        body = rating_json.get('body')
        rating = rating_json.get('rating')
        return Rating(id=id,
        poem_id=poem_id,
        poet_id=poet_id,
        body=body,
        rating=rating,
        ) 

