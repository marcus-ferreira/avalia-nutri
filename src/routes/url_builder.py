class UrlBuilder:

    def __init__(self) -> None:
        self._base_api = '/api'
        self._health_check = '/health_check'
        self._auth = '/auth'
        self._login = '/login'
        self._logout = '/logout'
        self._nutrition = '/nutrition'

    @property
    def base_api(self) -> str:
        return self._base_api

    @property
    def health_check(self) -> str:
        return self._health_check

    @property
    def auth(self) -> str:
        return self._auth

    @property
    def login(self) -> str:
        return self._login
    
    @property
    def logout(self) -> str:
        return self._logout

    @property
    def nutrition(self) -> str:
        return self._nutrition
