from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config.update(
    SECRET_KEY=b"BAD_SECRET_KEY",
    SQLALCHEMY_DATABASE_URI='sqlite:///nutri.db',
    SQLALCHEMY_TRACK_MODIFICATIONS=True
)
db = SQLAlchemy(app)


from avalia_nutri import routes
