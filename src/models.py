from sqlalchemy import Column, String, Integer

from src.config.database import Base


class Account(Base):
    __tablename__ = 'tb_account'

    id = Column(Integer, primary_key=True)
    username = Column(String(length=20), unique=True, nullable=False)
    password = Column(String(length=20), nullable=False)

    def __repr__(self):
        return f"<Account {self.username}>"
