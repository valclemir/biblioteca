
// Cadastra autor
function SalvaAutor(){
    var nomeAutor = $('input[name="autor"]').val()
    if (nomeAutor == ''){
        $("#autor").focus()
        return 1 
    }
    $.ajax({
        url: "/salva-autor-banco",
        type: "POST",
        data: {'nomeAutor':nomeAutor},
        success: function (){
            alert('Autor cadastrado!')
        },
        error: function(request, status, erro){
            alert (erro)
        }    
    })
}
//Cadastra editora 
function SalvaEditora(){
    var nomeEditora = $('input[name="editora"]').val()
    if (nomeEditora == ''){
        $("#editora").focus()
        return 1 
    }
    $.ajax({
        url: "/salva-editora-banco",
        type: "POST",
        data: {'nomeEditora':nomeEditora},
        success: function (){
            alert('Editora cadastrada!')
        },
        error: function(request, status, erro){
            alert (erro)
        }    
    })
}

//Cadastra area 
function SalvaArea(){
    var nomeArea = $('input[name="area"]').val()
    if (nomeArea == ''){
        $("#area").focus()
        return 1 
    }
    $.ajax({
        url: "/salva-area-banco",
        type: "POST",
        data: {'nomeArea':nomeArea},
        success: function (){
            alert('Gênero cadastrado!')
        },
        error: function(request, status, erro){
            alert (erro)
        }    
    })
}



//Cadastra livro 
function SalvaLivro(){
    var tituloLivro = $('input[name="titulo"]').val()
    var AutorIDLivro = $('select[name="AutorID"]').val().replace(/\D/g, '')
    var AreaIDLivro = $('select[name="AreaID"]').val().replace(/\D/g, '')
    var EdicaoLivro = $('input[name="Edicao"]').val()
    var EditoraID = $('select[name="EditoraID"]').val().replace(/\D/g, '')
    var Quantidade = $('input[name="Quantidade"]').val()
    var Paginas = $('input[name="Paginas"]').val()
    var Armario = $('input[name="Armario"]').val()
    var Ano = $('input[name="Ano"]').val()
    var Prateleira = $('input[name="Prateleira"]').val()
    var ISBN = $('input[name="ISBN"]').val()
    
    if (tituloLivro == ''){
        $("#titulo").focus() 
        return 1
    }
    else if(AutorIDLivro == ''){
        $("#AutorID").focus()
        return 1
    }
    else if(AreaIDLivro == ''){
        $("#AreaID").focus()
        return 1
    }
    else if(EdicaoLivro == ''){
        $("#Edicao").focus()
        return 1
    }
    else if(EditoraID == ''){
        $("#EditoraID").focus()
        return 1
    }
    else if(Quantidade == ''){
        $("#Quantidade").focus()
        return 1
    }
    else if(Paginas == ''){
        $("#Paginas").focus()
        return 1
    }
    else if(Armario == ''){
        $("#Armario").focus()
        return 1
    }
    else if(Ano == ''){
        $("#Ano").focus()
        return 1
    }
    else if(Prateleira == ''){
        $("#Prateleira").focus()
        return 1
    }
    else if(ISBN == ''){
        $("#ISBN").focus()
        return 1
    }
    
    $.ajax({
        url: "/salva-livro-banco",
        type: "POST",
        data: {'tituloLivro':tituloLivro,
                'AutorIDLivro': AutorIDLivro,
                'AreaIDLivro': AreaIDLivro,
                'EdicaoLivro': EdicaoLivro,
                'EditoraID': EditoraID,
                'Quantidade' : Quantidade,
                'Paginas' : Paginas,
                'Armario' : Armario,
                'Ano' : Ano,
                'Prateleira' : Prateleira,
                'ISBN' : ISBN
            },
        success: function (){
            alert('Livro cadastrado!')
        },
        error: function(request, status, erro){
            alert (erro)
        }    
    })
}

//Cadastra funcionario 
function SalvaFuncionario(){
    var matricula = $('input[name="matricula"]').val()
    var nomeFuncionario = $('input[name="nomeFuncionario"]').val()
    var CpfFuncionario = $('input[name="CpfFuncionario"]').val()
    var EmailFuncionario = $('input[name="EmailFuncionario"]').val()
    var TelefoneFuncionario = $('input[name="TelefoneFuncionario"]').val()
    console.log(matricula)
    if (matricula == ''){
        $("#matricula").focus()
        return 1 
    }
    else if (nomeFuncionario == ''){
        $("#nomeFuncionario").focus()
        return 1 
    }
    else if (CpfFuncionario == ''){
        $("#CpfFuncionario").focus()
        return 1 
    }
    else if (EmailFuncionario == ''){
        $("#EmailFuncionario").focus()
        return 1 
    }
    else if (TelefoneFuncionario == ''){
        $("#TelefoneFuncionario").focus()
        return 1 
    }

    $.ajax({
        url: "/salva-funcionario-banco",
        type: "POST",
        data: {'matricula':matricula,
                'nomeFuncionario': nomeFuncionario,
                'CpfFuncionario': CpfFuncionario,
                'EmailFuncionario': EmailFuncionario,
                'TelefoneFuncionario': TelefoneFuncionario
            },
        success: function (){
            alert('Funcionário cadastrado!')
        },
        error: function(request, status, erro){
            alert (erro)
        }    
    })
}

//Cadastro emprestimo livro
function SalvaEmprestimo(){
    var livro_id = $('select[name="LivroIDEmprestimo"]').val().replace(/\D/g, '')
    var dataEmprestimo = $('input[name="DataEmprestimo"]').val()
    var dataDevolucao = $('input[name="DataDevolucao"]').val()
    var CodigoSupervisor = $('input[name="SupervisorDevolucao"]').val()
    var FuncionarioMatricula = $('input[name="FuncionarioMatriculaDevolucao"]').val()
    var StatusDevolucao = $('select[name="StatusDevolucao"]').val()
    console.log('aqefwfwef', livro_id === null)
    if (livro_id == '' || livro_id === null){
        $("#LivroIDEmprestimo").focus() 
        return 1 
    }
    else if (dataEmprestimo == ''){
        $("#DataEmprestimo").focus() 
        return 1 
    }
    else if (dataDevolucao == ''){
        $("#DataDevolucao").focus() 
        return 1 
    }
    else if (CodigoSupervisor == ''){
        $("#SupervisorDevolucao").focus() 
        return 1 
    }
    else if (FuncionarioMatricula == ''){
        $("#FuncionarioMatriculaDevolucao").focus() 
        return 1 
    }
    else if (StatusDevolucao == ''){
        $("#StatusDevolucao").focus() 
        return 1 
    }

    $.ajax({
        url: "/salva-emprestimo-banco",
        type: "POST",
        data: {
                'livro_id': livro_id,
                'dataEmprestimo': dataEmprestimo,
                'dataDevolucao': dataDevolucao,
                'CodigoSupervisor': CodigoSupervisor,
                'FuncionarioMatricula': FuncionarioMatricula,
                'StatusDevolucao': StatusDevolucao
            },
        success: function (){
            alert('Emprestimo realizado!')
        },
        error: function(request, status, erro){
            alert (erro)
        }    
    })
}



//Baixas livro 
function BaixasLivro(){
    var codigoLivro = $('input[name="DivCodigoLivro"]').val()
    var statusPedido = $('select[name="BaixaStatusDevolucao"]').val()
    var dataProrrogacao = $('input[name="BaixaDataProrrogacao"]').val()
    $.ajax({
        url: "/salva-baixa-livro-banco",
        type: "POST",
        data: {'codigoLivro':codigoLivro,   
                'statusPedido': statusPedido,
                'dataProrrogacao': dataProrrogacao},
        success: function (){
            alert('Livro entregue!')
        },
        error: function(request, status, erro){
            alert (erro)
        }    
    })
}

function SendFormCadastro(){
    acao = $("#acao").val()
    if (acao == "1"){
        SalvaAutor() // Cadastra autor
    }
    else if (acao == "2"){
        SalvaEditora() // Cadastra editora 
    }
    else if (acao == "3"){
        SalvaArea() // Cadastra area 
    }
    else if (acao == "4"){
        if (SalvaLivro() == 1){ // Cadastra livro
            return 
        }
        //setTimeout("window.location.href = '/home'", 2000);
        
        
    }
    else if (acao == "5"){
        SalvaFuncionario() // Cadastra Funcionario 
    }
    else if (acao == "6"){
        SalvaEmprestimo() // Cadastra emprestimo 
    }
}