from flask import Flask
import os
from datetime import timedelta

 
 
app = Flask(__name__)



 
from app.login.views import loginUser 
from app.api.views import api
from app.home.views import principal


app.register_blueprint(loginUser)
app.register_blueprint(api)
app.register_blueprint(principal)


app.secret_key = os.urandom(24)



