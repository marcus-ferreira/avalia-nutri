from flask import render_template, session, request, url_for, redirect
from avalia_nutri import app
from avalia_nutri.models import Account
from avalia_nutri.nutrition import Person


@app.route("/", methods=["GET", "POST"])
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
            average_imc = person.get_average_imc(),
            title_imc = person.get_title_imc(),
            theorical_weight = person.get_theorical_weight(),
            tmb = person.get_tmb(),
            vet = person.get_vet(),
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


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        if session.get("username"):
            return redirect(url_for("index"))
        else:
            return render_template("login.html")
    else:
        username = request.form.get("username")
        password = request.form.get("password")

        account = Account.query.filter_by(username=username).first()
        if account and password == account.password:
            session['username'] = username
            return redirect(url_for("index"))
        else:
            return render_template("login.html") + "Usuário/Senha incorreta. Tente novamente."


@app.route("/logout")
def logout():
    if session.get("username"):
        session.pop("username")
    return redirect(url_for("login"))
