from pandas import read_sql
import json, re
from app.api.models.Banco import Banco

class Dados:
		
    
    def cadastroAutor(self, nomeAutor):
        try:
            
            print('AQUIIIIIIIIIII', Base.classes.keys())
            con = Banco().connection()
            sql = (f"""INSERT INTO autor(nome) VALUES ('{nomeAutor}') """)

            cursor = con.cursor()
            cursor.execute(sql)
        except Exception as e:
            print(e)
        finally:
            con.commit()
            con.close()


    def cadastraEditora(self, nomeEditora):
        try:
            con = Banco().connection()
            sql = (f"""INSERT INTO editora(nome) VALUES ('{nomeEditora}')""")

            cursor = con.cursor()
            cursor.execute(sql)
        except Exception as e:
            print(e)
        finally:
            con.commit()
            con.close() 

    
    def cadastraArea(self, nomeArea):
        try: 
            con = Banco().connection()
            sql = (f"""INSERT INTO area(nome) VALUES ('{nomeArea}')""")

            cursor = con.cursor()
            cursor.execute(sql)
        except Exception as e:
            print(e)
        finally:            
            con.commit()
            con.close() 



    def cadastraLivros(self, tituloLivro, autor_id, area_id, edicao, editora_id, 
                        quantidade, paginas, armario, ano, prateleira, isbn):
        try: 
            con = Banco().connection()
            sql = (f"""INSERT INTO livro (titulo, autor_id, 
                                            area_id, edicao, 
                                            editora_id, quantidade, 
                                            paginas, armario, ano, 
                                            prateleira, isbn)

                        VALUES ('{tituloLivro}', {autor_id}, {area_id}, {edicao}, {editora_id},
                                {quantidade}, {paginas}, '{armario}', {ano}, {prateleira}, '{isbn}') """) 
            cursor = con.cursor()
            cursor.execute(sql)
        except Exception as e:
            print(e) 
        finally:
            con.commit()
            con.close() 
        
        
    

    def cadastraFuncionario(self, matricula, nomeFuncionario, CpfFuncionario, EmailFuncionario, TelefoneFuncionario):
        try: 
            con = Banco().connection()
            sql = (f"""INSERT INTO funcionario (matricula, nome, cpf, email, telefone)
                        VALUES ({matricula}, '{nomeFuncionario}', '{CpfFuncionario}',
                        '{EmailFuncionario}', '{TelefoneFuncionario}') """)
        
            cursor = con.cursor()
            cursor.execute(sql)
        except Exception as e:
            print(e)
        finally:
            con.commit()
            con.close() 
        

         
    def cadastraEmprestimo(self, livro_id, dataEmprestimo, dataDevolucao, 
                            CodigoSupervisor, FuncionarioMatricula, StatusDevolucao):
        try:
            con = Banco().connection()
            sql = (f"""INSERT INTO emprestimo (livro_id, 
                                                data_emprestimo, 
                                                data_devolucao,
                                                codigo_supervisor,
                                                funcionario_matricula,
                                                status_devolucao) 
                        VALUES ({livro_id},
                                '{dataEmprestimo}',
                                '{dataDevolucao}',
                                {CodigoSupervisor},
                                {FuncionarioMatricula},
                                '{StatusDevolucao}')""") 
            
            cursor = con.cursor()
            cursor.execute(sql)
        except Exception as e:
            print(e)
        finally:
            con.commit()
            con.close() 
         

    def cadastraBaixaLivro(self,codigoLivro, status, dataProrrogacao=None):
        try: 
            con = Banco().connection()
            sql = ''
            if dataProrrogacao is None:
                sql = (f"""UPDATE emprestimo SET status_Devolucao = '{status}'
                            WHERE livro_ID = {codigoLivro} """)

            else:
                sql = (f"""UPDATE emprestimo SET status_Devolucao = '{status}', data_devolucao= '{dataProrrogacao}'
                            WHERE livro_ID = {codigoLivro} """)
            
            cursor = con.cursor()
            cursor.execute(sql)
        except Exception as e:
            print(e)
        finally:
            con.commit()
            con.close() 


    def carregaAutores(self):
        try:
            con = Banco().connection()
            sql = (f"""SELECT CONCAT(CAST(id AS VARCHAR(10)),'-',nome) nome FROM autor;""")
            
            DFAutores = read_sql(sql, con)
            return DFAutores
        except Exception as e:
            print(e)
        finally:
            con.close() 


    def carregaArea(self):
        try: 
            con = Banco().connection()
            sql = (f"""SELECT CONCAT(CAST(id AS VARCHAR(10)),'-',nome) area FROM area;""")
            
            DFArea = read_sql(sql, con)
            return DFArea
        except Exception as e:
            print(e)
        finally:
            con.close() 
    
    def carregaEditora(self):
        try: 
            con = Banco().connection() 
            sql = (f"""SELECT CONCAT(CAST(id AS VARCHAR(10)),'-',nome) editora FROM editora;""")

            DFEditora = read_sql(sql, Banco().connection())
            return DFEditora
        except Exception as e:
            print(e)
        finally:
            con.close() 


    def carregaArea(self):
        try:
            con = Banco().connection() 
            sql = (f"""SELECT CONCAT(CAST(id AS VARCHAR(10)),'-',nome) area FROM area; """)

            DFArea = read_sql(sql, Banco().connection())
            return DFArea
        except Exception as e:
            print(e)
        finally:
            con.close() 


    def carregaLivro(self, autor_id):
        try: 
            con = Banco().connection() 
            sql = (f"""	SELECT CONCAT(CAST(ID AS VARCHAR(10)), '-', titulo) livros FROM livro
                        WHERE area_id = {autor_id}
                        ORDER BY id""")

            DFLivro = read_sql(sql, Banco().connection())
            return DFLivro
        except Exception as e:
            print(e)
        finally:
            con.close() 


    def buscaColunasJson(self, tipoConsulta):
        try: 
            con = Banco().connection() 
            column_name = ''
            if tipoConsulta == 101:
                column_name = 'VW_Emprestimo'
            elif tipoConsulta == 102:
                column_name = 'VW_DadosLivro'
            elif tipoConsulta == 103:
                column_name = 'funcionario'
            elif tipoConsulta == 104:
                column_name = 'autor'
            elif tipoConsulta == 105:
                column_name = 'editora'

            sql = (f"""SELECT COLUMN_NAME FROM information_schema.`COLUMNS`
                        WHERE TABLE_NAME = '{column_name}'
                        ORDER BY ORDINAL_POSITION """)


            DFColumn = read_sql(sql, Banco().connection())
            return DFColumn
        except Exception as e:
            print(e)
        finally:
            con.close() 

    def buscaDadosJson(self, tipoConsulta):
        try:
            con = Banco().connection() 
            if tipoConsulta == 101:
                sql = (f"""SELECT `Codigo livro`,
                                    Titulo,
                                    `Data emprestimo`,
                                    `Data devolução`,
                                    `Codigo supervisor`,
                                    `Matricula funcionário`,
                                    `Nome funcionário`,
                                    `Status devolução`
                            FROM VW_Emprestimo""")
                DFEmprestimo = read_sql (sql, Banco().connection())
                return DFEmprestimo


            elif tipoConsulta == 102:
                sql = (f"""SELECT  titulo,
                                `Nome autor`,
                                Gênero,
                                edicao,
                                `Nome editora`,
                                quantidade,
                                paginas,
                                armario,
                                ano,
                                prateleira,
                                isbn
                        FROM VW_DadosLivro""")
                DFLivro = read_sql(sql, Banco().connection())
                return DFLivro


            elif tipoConsulta == 103:
                sql = (f"""SELECT matricula, 
                                nome, 
                                cpf, 
                                email, 
                                telefone 
                        FROM funcionario;
                        """)
                DFFuncionarios = read_sql(sql, Banco().connection())
                return DFFuncionarios


            elif tipoConsulta == 104:
                sql = (f"""SELECT id, nome FROM autor;""")
                DFAutores = read_sql (sql, Banco().connection())
                return DFAutores 


            elif tipoConsulta == 105:
                sql = (f"""SELECT id, nome FROM editora;""")
                DFAutores = read_sql (sql, Banco().connection())
                return DFAutores 
        except Exception as e:
            print(e)
        finally:
            con.close() 


    def dataframeToJson(self, dataframe):
        try: 
            dados = [
                                    dict([
                                            (colname, row[i]) 
                                            for i,colname in enumerate(dataframe.columns)
                                    ])
                                    for row in dataframe.values
                    ]
            return dados    
        except Exception as e:
            print(e) 



    def checaUsuario (self, login, senha):
        try:
            con = Banco().connection()
            sql = (f"""SELECT senha FROM supervisor  
                        WHERE login = '{login}' AND senha = '{senha}' """)

            DFChecaUsuario = read_sql(sql, con)
            if not DFChecaUsuario.empty == True:
                return DFChecaUsuario
            else:
                return ''
        except Exception as e:
            print(e)
        finally:
            con.close() 
        