from app.api.models.Dados import Dados
from pandas import read_sql 
class loginUsuario:
    
    def login(self, usuario, senha):
        return Dados().checaUsuario(usuario, senha)
        

   