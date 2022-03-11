from avalia_nutri import db


class Account(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(length=20), unique=True, nullable=False)
    password = db.Column(db.String(length=20), nullable=False)

    def __repr__(self):
        return f"<Account {self.username}>"

