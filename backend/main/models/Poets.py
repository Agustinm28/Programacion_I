from email.policy import default
from .. import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

# Se crea la clase poeta
class Poet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    lname = db.Column(db.String(100), nullable=False)
    uname = db.Column(db.String(100), nullable=False)
    mail = db.Column(db.String(100), nullable=False)
    passw = db.Column(db.String(30), nullable=False) #* INTERES EN PASSWORD (RESTORE)
    admin = db.Column(db.Boolean(), nullable=False, default=False)
    activated = db.Column(db.Boolean(), nullable=False, default=False)
    poems = db.relationship('Poem', back_populates='poet', # Relacion con poemas
                            cascade='all, delete-orphan')
    rating = db.relationship('Rating', back_populates='poet', # Relacion con rating
                             cascade='all, delete-orphan', single_parent=False)

    @property
    def plain_password(self):
        raise AttributeError('Password can\'t be read')
    
    # Setter de la contraseña toma un valor en texto plano
    # calcula el hash (encriptado) y lo guarda en el atributo password
    
    @plain_password.setter
    def plain_password(self, passw):
        self.passw = generate_password_hash(passw) # Password encriptada
    
    # Método que compara una contraseña en texto plano con el hash guardado en la db para validarla
    
    def validate_pass(self, password):
        return check_password_hash(self.passw, password)
    
    def __repr__(self):
        return '<Poet: %r %r >' % (self.id, self.name + '' + self.lname) # Devuelve la calse poeta

    def to_json(self): # Pasa los datos json (Util para conseguir datos completos)
        poems = [poem.to_json_short()['title'] for poem in self.poems]
        rating = [rating.to_json_short() for rating in self.rating]
        poet_json = {
            'id': self.id,
            'name': str(self.name),
            'lname': str(self.lname),
            'uname': str(self.uname),
            'mail': str(self.mail),
            'admin': bool(self.admin),
            'activated': bool(self.activated),
            'poems': poems,
            'poems_count': len(poems),
            'ratings_count': len(rating)
        }
        return poet_json
 
    def to_json_public(self): # Pasa los datos de los usuarios a un json publico
        poems = [poem.to_json_short()['title'] for poem in self.poems]
        rating = [rating.to_json_short() for rating in self.rating]
        poet_json = {
            'id': self.id,
            'uname': str(self.uname),
            'poems': poems,
            'poems_count': len(poems),
            'ratings_count': len(rating)
        }
        return poet_json
    
    def to_json_short(self):
        poet_json = {
            'uname': str(self.uname),
            'user_id': str(self.id)
        }
        return poet_json

    @staticmethod
    def from_json(poet_json): # Devuelve el archivo JSON del poeta
        id = poet_json.get('id')
        name = poet_json.get('name')
        lname = poet_json.get('lname')
        uname = poet_json.get('uname')
        mail = poet_json.get('mail')
        passw = poet_json.get('passw')
        admin = poet_json.get('admin')
        activated = poet_json.get('activated')
        return Poet(id=id,
                    name=name,
                    lname=lname,
                    uname=uname,
                    mail=mail,
                    plain_password=passw,
                    admin=admin,
                    activated=activated
                    )
