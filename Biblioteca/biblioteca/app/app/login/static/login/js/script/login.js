function login(){
        var nomeUsuario = $('input[name="usuario"]').val()
        var senha = $('input[name="senha"]').val()
        $.ajax({
            url: "/carrega-usuarios",
            type: "POST",
            data: {"nomeUsuario":nomeUsuario, "senha": senha},
            success: function(usuario){
                if (usuario.length != 0){
                    $.ajax({
                        url: "/login",
                        type: "POST",
                        data: {"usuario":nomeUsuario,  "senha": senha},
                        success: function(){
                            window.location = "/home"
                        }
                    })
                    
                }
                else{
                    $("#DivMsgError").show()
                    $("#texto").html("\
                                        <strong>Usuário e/ou senha incorreto(s).</strong>\
                                ")
                }
            }
        })
}