$(document).ready(function(){
    $("#butao").append("<input id='btn-processar' class='btn btn-success'  onclick='SendFormCadastro()' type='button' value='Cadastrar'/><br><br><br><br>")
})


$(function(){
    $("#acao").on('change', function(){
        if ($(this).val() == 1 || $(this).val() == 2 || 
            $(this).val() == 3 || $(this).val() == 4 || 
            $(this).val() == 5 || $(this).val() == 6){
            $("#butao").empty()
            $("#butao").append("<input id='btn-processar' class='btn btn-success'  onclick='SendFormCadastro()' type='button' value='Cadastrar'/><br><br><br><br>")
        }
        else if($(this).val() == 101){
            $("#butao").empty()
            $("#butao").append("<input id='btn-processar' class='btn btn-success'  onclick='BaixasLivro()' type='button' value='Finalizar emprestimo'/><br><br><br><br>")
        }
        else  {
            $("#butao").empty()
            //$("#butao").append("<input id='btn-processar' class='btn btn-primary'  onclick='BuscaRelatorio()' type='button' value='Buscar'/>")
        }

    })
})
   
