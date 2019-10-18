//Carrega area
function carregaArea(acao){
    var div = ''
    if (acao == "4"){
        div = '#AreaID'
    }
    else if (acao == "6"){
        div = '#AreaIDEmprestimo'
    }
    $.ajax({
        url: '/carrega-area',
        type: 'GET',
        datatype: "",
        success: function(dados){
            console.log(dados)
            $(div).empty()
            dados.forEach(i => {
                $(div).append(
                    $("<option ></option>")
                    .attr("value", i.area).text(i.area));
            });
            $("#AreaID").selectpicker('refresh');
        }
    })
}


//Carrega autores
function carregaAutores(){
    $.ajax({
        url: '/carrega-autores',
        type: 'GET',
        datatype: "",
        success: function(dados){
            console.log(dados)
            dados.forEach(i => {
                $("#AutorID").append(
                    $("<option ></option>")
                    .attr("value", i.nome).text(i.nome));
            });
            $("#AutorID").selectpicker('refresh');
        }
    })
}

//Carrega editora
function carregaEditora(){
    $.ajax({
        url: '/carrega-editora',
        type: 'GET',
        datatype: "",
        success: function(dados){
            console.log(dados)
            dados.forEach(i => {
                $("#EditoraID").append(
                    $("<option ></option>")
                    .attr("value", i.editora).text(i.editora));
            });
            $("#EditoraID").selectpicker("refresh");
        }
    })
}

//Carrega genero
function carregaGenero(){
    $.ajax({
        url: '/carrega-area-livro',
        type: 'GET',
        datatype: "",
        success: function(dados){
            console.log(dados)
            dados.forEach(i => {
                $("#AreaIDEmprestimo").append(
                    $("<option ></option>")
                    .attr("value", i.area).text(i.area));
            });
        }
    })
}



function carregaCampos(){
    var acao = $("#acao").val()
    if (acao == 4){
        carregaAutores()
        carregaArea(acao)
        carregaEditora()
    }
    else if (acao == 6){
        carregaArea(acao)
    }
}