import logging
import sys

from flask import logging as flask_logging

from src.config.env import Env


class AppFormatter(logging.Formatter):
    """
    The formatter responsible for handling the app log messages info.
    """


def setup_logger(app):
    """
    Responsible for configuring the app's logger.
    :param app: Flask app.
    """
    app.logger.removeHandler(flask_logging.default_handler)

    # Configure basic log level for all loggers
    for logger_name in app.logger.manager.loggerDict:
        request_logger = logging.getLogger(logger_name)
        request_logger.setLevel(logging.ERROR)

    # Create Formatter
    app_formatter = AppFormatter(fmt=Env.APP_FORMAT, datefmt=Env.DATE_TIME_FORMAT)

    # Create Handlers
    app_handler = logging.StreamHandler(sys.stdout)

    # Bind Formats to Handlers
    app_handler.setFormatter(app_formatter)

    # Create Loggers
    app_logger = logging.getLogger('app')

    # Bind Handlers
    app_logger.addHandler(app_handler)

    # Set Logger Levels
    app_logger.setLevel(logging.getLevelName(Env.LOG_LEVEL))
