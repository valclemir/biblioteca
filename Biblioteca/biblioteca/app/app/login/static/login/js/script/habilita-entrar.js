function habilitaBotaoEntrar (){
    var nomeUsuario = $('input[name="usuario"]').val()
    var senha = $('input[name="senha"]').val()
    console.log(nomeUsuario.length, senha.length)

    if ( (nomeUsuario.length > 2) && (senha.length > 2) ){
        $("#Entrar").prop("disabled", false);
        return 
    }
    else if(  (nomeUsuario.length <= 2) && (senha.length <= 2) || (senha.length <= 2)){
        $("#Entrar").prop("disabled", true);
        return 
    }

}

