from flask import Flask, render_template, request, \
                redirect, session, url_for, Blueprint




rel = Blueprint('rel', __name__, 
                     template_folder="templates/relatorio",  
                     static_folder='static/relatorio', 
                     static_url_path='/static/relatorio')


@rel.route("/relatorio", methods=["GET"])
def relatorio():
        return render_template("sidemenu-backup.html")

