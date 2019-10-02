import pymysql 

class Banco:

    def __init__(self):
        self.host ='localhost'
        self.user = 'root'
        self.passwd = 'q1w2e3r4'
        self.database = 'biblioteca'


    def connection(self):
        con = pymysql.connect(
                host = self.host,
                user = self.user,
                password = self.passwd,
                db = self.database
            
        )
        return con 

