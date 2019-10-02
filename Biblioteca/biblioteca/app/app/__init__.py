from flask import Flask
import os
from datetime import timedelta

 
 
app = Flask(__name__)


app.secret_key = os.urandom(24)
 
 
from app.api.views import api
from app.home.views import home


app.register_blueprint(api)
app.register_blueprint(home)
