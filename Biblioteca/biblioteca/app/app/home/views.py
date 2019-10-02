from flask import Flask, render_template, request, \
                redirect, session, url_for, Blueprint
from app.api.models.Dados import Dados
#from app.app.api.models.Dados import Dados

home = Blueprint('home', __name__, 
                     template_folder="templates/home",  
                     static_folder='static/home', 
                     static_url_path='/static/home')


@home.route("/home", methods=["GET"])
def addBook():
        return render_template("home.html")



