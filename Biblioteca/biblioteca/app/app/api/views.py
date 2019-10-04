from flask import Flask, render_template, request, \
                redirect, session, url_for, Blueprint, \
                make_response, jsonify, json
import re
from app.api.models.Banco import Banco
from app.api.models.Dados import Dados
from app.login.models.usuarioLogin import loginUsuario


api = Blueprint('api', __name__)


@api.route('/salva-autor-banco', methods=["POST"])
def salvaAutorBanco():
        if request.method == "POST":        
                nomeAutor = request.form.get('nomeAutor')
                Dados().cadastroAutor(nomeAutor)
        return '1'


@api.route('/salva-editora-banco', methods=["POST"])
def salvaEditorabanco():
        if request.method == "POST":
                nomeEditora = request.form.get('nomeEditora')
                print(nomeEditora)
                Dados().cadastraEditora(nomeEditora)
        return '1'


@api.route('/salva-area-banco', methods=["POST"])
def salvaAreaBanco():
        if request.method == "POST":
                nomeArea = request.form.get('nomeArea')
                Dados().cadastraArea(nomeArea) 
        return '1'

@api.route('/salva-livro-banco', methods=["POST"])
def salvaLivroBanco():
        if request.method == "POST":
                tituloLivro = request.form.get("tituloLivro")
                autor_id = request.form.get("AutorIDLivro") 
                area_id = request.form.get("AreaIDLivro")
                edicao = request.form.get("EdicaoLivro")
                editora_id = request.form.get("EditoraID") 
                quantidade = request.form.get("Quantidade")
                paginas = request.form.get("Paginas") 
                armario = request.form.get("Armario") 
                ano = request.form.get("Ano")
                prateleira = request.form.get("Prateleira")
                isbn = request.form.get("ISBN")
                Dados().cadastraLivros(tituloLivro, autor_id, area_id, edicao, editora_id, 
                                        quantidade, paginas, armario, ano, prateleira, isbn)
        return '1'


@api.route('/salva-funcionario-banco', methods=["POST"])
def salvaFuncionarioBanco():
        if request.method == "POST":
                matricula = request.form.get('matricula')
                nomeFuncionario = request.form.get('nomeFuncionario')
                CpfFuncionario = request.form.get('CpfFuncionario')
                EmailFuncionario = request.form.get('EmailFuncionario')
                TelefoneFuncionario = request.form.get('TelefoneFuncionario')
                Dados().cadastraFuncionario(int(matricula), nomeFuncionario, CpfFuncionario,
                                                EmailFuncionario, TelefoneFuncionario)
        return '1'     


@api.route('/salva-emprestimo-banco', methods=["POST"])
def SalvaEmprestimoBanco():
        if request.method == "POST":
                livro_id = request.form.get('livro_id') 
                dataEmprestimo = request.form.get('dataEmprestimo')
                dataDevolucao = request.form.get('dataDevolucao') 
                CodigoSupervisor = request.form.get('CodigoSupervisor')  
                FuncionarioMatricula = request.form.get('FuncionarioMatricula')
                StatusDevolucao = request.form.get('StatusDevolucao')
                Dados().cadastraEmprestimo(livro_id, dataEmprestimo, dataDevolucao, CodigoSupervisor,
                                                FuncionarioMatricula, StatusDevolucao)
        return '1'


@api.route('/salva-baixa-livro-banco', methods=["POST"])
def salvaBaixaLivroBanco():
        if request.method == "POST":
                codigoLivro = request.form.get('codigoLivro')
                statusPedido = request.form.get('statusPedido')
                dataProrrogacao = request.form.get('dataProrrogacao')
                print('STATUS', statusPedido)
                Dados().cadastraBaixaLivro(codigoLivro, statusPedido, dataProrrogacao) 

        return '1'

@api.route('/carrega-autores', methods=["GET"])
def carregaFiliais():
        if request.method == "GET":
                return jsonify(Dados().dataframeToJson(Dados().carregaAutores()))



@api.route('/carrega-area', methods=["GET"])
def carregaArea():
        if request.method == "GET":
                return jsonify(Dados().dataframeToJson(Dados().carregaArea()))



@api.route('/carrega-editora', methods=["GET"])
def carregaEditora():
        if request.method == "GET":
                return jsonify(Dados().dataframeToJson(Dados().carregaEditora()))


@api.route('/carrega-area-livro', methods=["GET"])
def carregaAreaLivro():
        if request.method == "GET":
                return jsonify(Dados().dataframeToJson(Dados().carregaArea()))


@api.route('/carrega-livros/<autor_id>', methods=["GET"])
def carregaLivros(autor_id):
        if request.method == "GET":
                return jsonify(Dados().dataframeToJson(Dados().carregaLivro(int(autor_id))))


@api.route('/carrega-usuarios', methods=["POST"])
def carregaUsuario():
        if request.method == "POST":
                usuario = request.form.get("nomeUsuario")
                senha = request.form.get("senha")
                print(usuario, senha)
                return jsonify(Dados().dataframeToJson(loginUsuario().login(usuario, senha)))


@api.route('/busca-colunas-json/<tipoConsulta>', methods=["GET", "POST"])
def buscaColunasJson(tipoConsulta):
        if request.method == "POST" or request.method == "GET":
                print('AQUIIIIIIIIIIIII', Dados().buscaDadosJson(int(tipoConsulta)))
                return jsonify(Dados().dataframeToJson(Dados().buscaColunasJson(int(tipoConsulta))))


@api.route('/busca-dados-json/<tipoConsulta>', methods=["GET", "POST"])
def buscaDadosJson(tipoConsulta):
        if request.method == "POST" or request.method == "GET":
                print('AQUIIIIIIIIIIIII', Dados().buscaDadosJson(int(tipoConsulta)))
                return jsonify(Dados().dataframeToJson(Dados().buscaDadosJson(int(tipoConsulta))))