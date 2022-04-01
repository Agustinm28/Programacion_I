from .. import db

class Poet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable = False)
    lname = db.Column(db.String(100), nullable = False)
    mail = db.Column(db.String(100), nullable = False)
    passw = db.Column(db.String(30), nullable = False)
    admin = db.Column(db.Boolean(), nullable = False, default = False)

    def __repr__(self):
        return '<Poet: %r %r >' % (self.id, self.name, self.lname, self.mail, self.passw, self.admin)

    def to_json(self):
        poet_json = {
            'id':self.id,
            'name':str(self.name),
            'lname':str(self.lname),
            'mail':str(self.mail),
            'passw':str(self.passw),
            'admin':bool(self.admin)
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