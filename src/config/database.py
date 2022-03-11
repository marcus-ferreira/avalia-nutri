from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()


class DatabaseConnection:
    """
    Class to manage the database connection
    """
    def __init__(self) -> None:
        self.connection_string = self._get_connection_string()
        self.engine = create_engine(
            self.connection_string
        )
        self.session = sessionmaker(bind=self.engine)

        metadata = Base.metadata
        metadata.create_all(self.engine)

    @staticmethod
    def _get_connection_string() -> str:
        """
        Get the database connection string on secret manager
        """
        return "sqlite:///nutri.db"

    def get_session(self) -> Session:
        """
        Get a connection session
        """
        return self.session()