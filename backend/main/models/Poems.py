from .. import db

class Poem(db.Model):
      
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    body = db.Column(db.String(1000), nullable=False)
    date = db.Column(db.DateTime())
    poet_id = db.Column(db.Integer, db.ForeignKey(
        'poet.id'), nullable=False)                            # Clave foranea
    poet = db.relationship('Poet', back_populates="poems", uselist=False)
    rating = db.relationship('Rating', back_populates='poem',
                             cascade='all, delete-orphan', single_parent=False)

    def __repr__(self):
        return '({}) {}:\n{}\nDate: {}\nWritten by {}'.format(self.id, self.title, self.body, self.date, self.poet_id)

    def to_json(self):
        poet = self.poet.to_json_short()
        rating = [rating.to_json_rate()['rating'] for rating in self.rating]
        ratings_count = len(rating)
        av_rating = sum(rating)/len(rating) if len(rating) > 0 else None
        comments = [rating.to_json_public() for rating in self.rating]
        poem_json = {
            'id': self.id,
            'title': str(self.title),
            'body': str(self.body),
            'date': str(self.date),
            'poet': poet,
            'rating_count': ratings_count,
            'av_rating': av_rating,
            'comments': comments
        }
        return poem_json

    def to_json_short(self):
        poem_json = {
            'id': self.id,
            'title': str(self.title),
        }
        return poem_json
    
    def to_json_public(self):
        poet = self.poet.to_json_short()
        rating = [rating.to_json_rate()['rating'] for rating in self.rating]
        av_rating = sum(rating)/len(rating) if len(rating) > 0 else None
        poem_json = {
            'id': self.id,
            'title': str(self.title),
            'body': str(self.body),
            'date': str(self.date),
            'poet': poet,
            'av_rating': av_rating,
        }
        return poem_json

    @staticmethod
    def from_json(poem_json):
        id = poem_json.get('id')
        title = poem_json.get('title')
        body = poem_json.get('body')
        date = poem_json.get('date')
        poet_id = poem_json.get('poet_id')
        return Poem(id=id,
                    title=title,
                    body=body,
                    date=date,
                    poet_id=poet_id
                    )
