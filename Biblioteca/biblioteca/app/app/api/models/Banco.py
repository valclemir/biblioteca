import pymysql 
from json import load 

class Banco:

    def __init__(self):
        with open('config.json', 'r') as json_data:
            dadosjson = load(json_data)
            for dado in dadosjson['servidor_banco']:
                host = dado['host']     
                username = dado['username']
                password = dado['password']
                db = dado['db']
                
        self.host =host
        self.user = username
        self.passwd = password
        self.database = db


    def connection(self):
        con = pymysql.connect(
                host = self.host,
                user = self.user,
                password = self.passwd,
                db = self.database
            
        )
        return con 

