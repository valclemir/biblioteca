from pandas import read_sql
import json, re
from app.api.models.Banco import Banco


class Dados:
		
    
    def cadastroAutor(self, nomeAutor):
        con = Banco().connection()
        sql = (f"""INSERT INTO autor(nome) VALUES ('{nomeAutor}') """)

        cursor = con.cursor()
        cursor.execute(sql)
        con.commit()


    def cadastraEditora(self, nomeEditora):
        con = Banco().connection()
        sql = (f"""INSERT INTO editora(nome) VALUES ('{nomeEditora}')""")

        cursor = con.cursor()
        cursor.execute(sql)
        con.commit()

    
    def cadastraArea(self, nomeArea):
        con = Banco().connection()
        sql = (f"""INSERT INTO area(nome) VALUES ('{nomeArea}')""")
        print(sql)
        cursor = con.cursor()
        cursor.execute(sql)
        con.commit()



    def cadastraLivros(self, tituloLivro, autor_id, area_id, edicao, editora_id, 
                        quantidade, paginas, armario, ano, prateleira, isbn):
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
        con.commit()
        
        
    

    def cadastraFuncionario(self, matricula, nomeFuncionario, CpfFuncionario, EmailFuncionario, TelefoneFuncionario):
        con = Banco().connection()
        sql = (f"""INSERT INTO funcionario (matricula, nome, cpf, email, telefone)
                    VALUES ({matricula}, '{nomeFuncionario}', '{CpfFuncionario}',
                    '{EmailFuncionario}', '{TelefoneFuncionario}') """)
    
        cursor = con.cursor()
        cursor.execute(sql)
        con.commit()
        

         
    def cadastraEmprestimo(self, livro_id, dataEmprestimo, dataDevolucao, 
                            CodigoSupervisor, FuncionarioMatricula, StatusDevolucao):
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
        print(sql)
        cursor = con.cursor()
        cursor.execute(sql)
        con.commit()
         

    def cadastraBaixaLivro(self,codigoLivro, status, dataProrrogacao=None):
        con = Banco().connection()
        sql = ''
        if dataProrrogacao is None:
            sql = (f"""UPDATE emprestimo SET status_Devolucao = '{status}'
                        WHERE livro_ID = {codigoLivro} """)

        else:
            sql = (f"""UPDATE emprestimo SET status_Devolucao = '{status}', data_devolucao= '{dataProrrogacao}'
                        WHERE livro_ID = {codigoLivro} """)
        print(sql)
        cursor = con.cursor()
        cursor.execute(sql)
        con.commit()


    def carregaAutores(self):
        sql = (f"""SELECT CONCAT(CAST(id AS VARCHAR(10)),'-',nome) nome FROM autor;""")
        
        DFAutores = read_sql(sql, Banco().connection())
        return DFAutores


    def carregaArea(self):
        sql = (f"""SELECT CONCAT(CAST(id AS VARCHAR(10)),'-',nome) area FROM area;""")
        
        DFArea = read_sql(sql, Banco().connection())
        return DFArea

    
    def carregaEditora(self):
        sql = (f"""SELECT CONCAT(CAST(id AS VARCHAR(10)),'-',nome) editora FROM editora;""")

        DFEditora = read_sql(sql, Banco().connection())
        return DFEditora


    def carregaArea(self):
        sql = (f"""SELECT CONCAT(CAST(id AS VARCHAR(10)),'-',nome) area FROM area; """)

        DFArea = read_sql(sql, Banco().connection())
        return DFArea


    def carregaLivro(self, autor_id):
        sql = (f"""	SELECT CONCAT(CAST(ID AS VARCHAR(10)), '-', titulo) livros FROM livro
                    WHERE area_id = {autor_id}
	                ORDER BY id""")

        DFLivro = read_sql(sql, Banco().connection())
        return DFLivro


    def buscaColunasJson(self, tipoConsulta):
        column_name = ''
        if tipoConsulta == 101:
            column_name = 'emprestimo'
        elif tipoConsulta == 102:
            column_name = 'VW_DadosLivro'

        sql = (f"""SELECT COLUMN_NAME FROM information_schema.`COLUMNS`
                    WHERE TABLE_NAME = '{column_name}'
                    ORDER BY ORDINAL_POSITION """)


        print(sql)
        DFColumn = read_sql(sql, Banco().connection())
        return DFColumn


    def buscaDadosJson(self, tipoConsulta):
        if tipoConsulta == 101:
            sql = (f"""SELECT ID,
                            livro_ID,
                            DATE_FORMAT(data_emprestimo,'%d/%m/%Y') data_emprestimo,
                            DATE_FORMAT(data_devolucao,'%d/%m/%Y') data_devolucao,
                            codigo_supervisor,
                            funcionario_matricula,
                            status_devolucao
                    FROM emprestimo""")
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


    def dataframeToJson(self, dataframe):
        dados = [
                                dict([
                                        (colname, row[i]) 
                                        for i,colname in enumerate(dataframe.columns)
                                ])
                                for row in dataframe.values
                ]
        return dados    
