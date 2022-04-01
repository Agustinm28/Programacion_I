from .. import db

class Poem(db.Model):
    
    # user = db.relationship('poems', backref='poets')

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), nullable = False)
    body = db.Column(db.String(1000), nullable = False)
    date = db.Column(db.DateTime())
    poet_id = db.Column(db.Integer, nullable = False)
        
    def __repr__(self):
        return '({}) {}:\n{}\nDate: {}\nWritten by {}'.format(self.id, self.title, self.body, self.date, self.poet_id)

    def to_json(self):
        poem_json = {
            'id': self.id,
            'title': str(self.title),
            'body': str(self.body),
            'date': str(self.date),
            'poet_id' : self.poet_id
        }
        return poem_json

    def to_json_short(self):
        poem_json = {
            'title': str(self.title),
            'body': str(self.body),
            'date': str(self.date)
        }
        return poem_json

    @staticmethod
    def from_json(poem_json):
        id = poem_json.get('id')
        title = poem_json.get('title')
        body = poem_json.get('body')
        date = poem_json.get('date')
        poet_id = poem_json.get('poet_id')
        return Poem(id = id,
                    title = title,
                    body = body,
                    date = date,
                    poet_id = poet_id
                    )
