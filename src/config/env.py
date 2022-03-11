import os


class Env:
    """
    Class responsible for reading environment variables
    """
    #: The app name.
    APP_NAME = 'avalia_nutri'

    #: The app host.
    HOST = os.getenv('HOST', '0.0.0.0')

    #: The app port.
    PORT = int(os.getenv('PORT', '8000'))

    #: The log level.
    LOG_LEVEL = os.getenv('LOG_LEVEL', 'INFO')

    #: The request log format.
    REQUEST_FORMAT = '[%(asctime)s] %(remote_addr)s %(method)s %(path)s %(status)s %(request_id)s %(message)s'

    #: The app log format.
    APP_FORMAT = '[%(asctime)s] [%(levelname)s] %(request_id)s | %(message)s'

    #: The date time format.
    DATE_TIME_FORMAT = '%Y-%m-%dT%H:%M:%S%z'

    #: DB credentials.
    DB_USER = os.getenv('DB_USER')
    DB_PASSWORD = os.getenv('DB_PASSWORD')
