
import flask

from flask import request, render_template, session, redirect, url_for

from src.routes.url_builder import UrlBuilder
from src.person import Person


url_builder = UrlBuilder()

nutrition_blueprint = flask.Blueprint(
    name='nutrition',
    import_name=__name__,
    url_prefix=f'{url_builder.auth}',
)


@nutrition_blueprint.route("/", methods=["GET", "POST", ])
def index():
    if request.method == "GET":
        if session.get("username"):
            user = session.get("username")
            return render_template("index.html", user=user)
        else:
            return redirect(url_for("login"))
    else:
        try:
            name = request.form.get("name")
            sex = request.form.get("sex")
            age = int(request.form.get("age"))
            weight = round(float(request.form.get(
                "weight").replace(",", ".")), 2)
            height = round(float(request.form.get(
                "height").replace(",", ".")), 2)
            act = int(request.form.get("act"))

            person = Person(name, sex, age, weight, height, act)

            imc = person.get_imc()
            average_imc = person.get_average_imc()
            title_imc = person.get_title_imc()
            theorical_weight = person.get_theorical_weight()
            tmb = person.get_tmb()
            vet = person.get_vet()
            gte = person.get_gte()

        except ValueError:
            return "Insira os valores corretamente"
        return render_template("result.html",
                               name=name,
                               sex=sex,
                               age=age,
                               weight=weight,
                               height=height,
                               act=act,
                               imc=imc,
                               average_imc=average_imc,
                               title_imc=title_imc,
                               theorical_weight=theorical_weight,
                               tmb=tmb,
                               vet=vet,
                               gte=gte)
