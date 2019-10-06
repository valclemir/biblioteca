﻿from flask import Flask, render_template, request, \
                 redirect, session, url_for, Blueprint, flash
#from app.api.models.classes import principal
from app.login.models.usuarioLogin import loginUsuario
from flask_wtf.csrf import CSRFProtect
#from functools import wraps
import functools
import requests 
import json


loginUser = Blueprint('loginUser', 
                        __name__, 
                        template_folder='templates/login',
                        static_folder='static/login', 
                        static_url_path='/static/login')

@loginUser.route('/')
def home():
        print(session)
        if 'logged_in' not in session:
                return render_template('login.html')     
        else:
                return redirect(url_for('principal.home'))


@loginUser.route('/login', methods=['POST'])
def login():
        LoginUsuario = loginUsuario()
        usuario = request.form.get('usuario')
        senha = request.form.get('senha')
        LoginExiste = LoginUsuario.login(usuario, senha)
        
        if not LoginExiste.empty == True: #Login existe
                session['logged_in'] = True
                session['senha'] = LoginExiste['senha'].values[0]
                print('SESSION AQUIIIIIIIIIIIIII', session['logged_in'], session)
                return redirect(url_for('principal.home'))
                
        return home()


@loginUser.route("/logout")
def logout():
        session.clear()
        return home()


def login_required(view):
    @functools.wraps(view)
    def wrapped_view(**kwargs):        
        if not 'logged_in' in session.keys():
            return redirect(url_for('loginUser.home'))
        return view(**kwargs)
    return wrapped_view
		

@loginUser.route("/recuperar-senha", methods=["GET"])
def resetSenha():
        return render_template('recuperar-senha.html')

