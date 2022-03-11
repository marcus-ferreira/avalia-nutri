import flask
import os

from src.config.logger import setup_logger
from src.routes.health_check import health_check_blueprint
from src.routes.auth import auth_blueprint
from src.routes.nutrition import nutrition_blueprint



def setup_app() -> flask.Flask:
    """
    Setup flask app.
    :return: The flask app.
    :rtype: flask.Flask
    """
    template_dir = os.path.abspath(
        os.path.join(os.path.dirname(__file__), 
        '..', '..', 'webapp', 'templates')
    )

    app = flask.Flask(__name__, template_folder=template_dir)

    # Setup logger
    setup_logger(app)

    # Register blueprints
    app.register_blueprint(health_check_blueprint)
    app.register_blueprint(auth_blueprint)
    app.register_blueprint(nutrition_blueprint)

    # Register error handlers

    # Register template directory

    return app
