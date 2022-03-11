import flask

from flask import request, render_template, session, redirect, url_for

from src.config.database import DatabaseConnection
from src.routes.url_builder import UrlBuilder
from src.models import Account


url_builder = UrlBuilder()

auth_blueprint = flask.Blueprint(
    name='auth',
    import_name=__name__,
    url_prefix=f'{url_builder.auth}',
)


@auth_blueprint.route(f'{url_builder.login}', methods=['GET', 'POST', ])
def login():
    """
    The login route.
    | **Path**: /auth/login
    | **Methods**: *GET*
    :return: The login page.
    :rtype: flask.Response
    """
    if request.method == "GET":
        if session.get("username"):
            return redirect(url_for("index"))
        else:
            return render_template("login.html")
    else:
        username = request.form.get("username")
        password = request.form.get("password")

        db_conn = DatabaseConnection()

        account = db_conn.get_session().query(Account).filter_by(username=username).first()
        if account and password == account.password:
            session['username'] = username
            return redirect(url_for("index"))
        else:
            return render_template("login.html") + "Usuário/Senha incorreta. Tente novamente."


@auth_blueprint.route("/logout")
def logout():
    if session.get("username"):
        session.pop("username")
    return redirect(url_for("login"))
