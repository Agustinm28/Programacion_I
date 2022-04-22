from .. import db


class Poet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    lname = db.Column(db.String(100), nullable=False)
    mail = db.Column(db.String(100), nullable=False)
    passw = db.Column(db.String(30), nullable=False)
    admin = db.Column(db.Boolean(), nullable=False, default=False)
    poems = db.relationship('Poem', back_populates='poet',
                            cascade='all, delete-orphan')
    rating = db.relationship('Rating', back_populates='poet',
                             cascade='all, delete-orphan', single_parent=False)

    def __repr__(self):
        return '<Poet: %r %r >' % (self.id, self.name, self.lname, self.mail, self.passw, self.admin)

    def to_json(self):
        poems = [poem.to_json_short()['title'] for poem in self.poems]
        rating = [rating.to_json_short() for rating in self.rating]
        poet_json = {
            'id': self.id,
            'name': str(self.name),
            'lname': str(self.lname),
            'mail': str(self.mail),
            'passw': str(self.passw),
            'admin': bool(self.admin),
            'poems': poems,
            'poems_count': len(poems),
            'ratings_count': len(rating)
        }
        return poet_json

    def to_json_short(self):
        poet_json = {
            'name': str(self.name) + ' ' + str(self.lname),
            'user_id': str(self.id)
        }
        return poet_json

    @staticmethod
    def from_json(poet_json):
        id = poet_json.get('id')
        name = poet_json.get('name')
        lname = poet_json.get('lname')
        mail = poet_json.get('mail')
        passw = poet_json.get('passw')
        admin = poet_json.get('admin')
        return Poet(id=id,
                    name=name,
                    lname=lname,
                    mail=mail,
                    passw=passw,
                    admin=admin
                    )
