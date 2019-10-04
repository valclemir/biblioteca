from flask import Flask, render_template, request, \
                redirect, session, url_for, Blueprint
from app.api.models.Dados import Dados
from app.login.views import login_required

principal = Blueprint('principal', __name__, 
                     template_folder="templates/home",  
                     static_folder='static/home', 
                     static_url_path='/static/home')


@principal.route("/home", methods=["GET"])
@login_required
def home():
        return render_template("home.html")



