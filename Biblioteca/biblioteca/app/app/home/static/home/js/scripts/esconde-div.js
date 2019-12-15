$((function(){
    $("#divBaixaDataProrrogacao").hide()
    $("#DivLabelCodigoLivro").hide()


    $("#CadastroEditora").hide(); //2
    $("#CadastroArea").hide(); //3
    $("#CadastroLivro").hide(); //4
    $("#CadastroFuncionario").hide() //5
    $("#CadastroEmprestimo").hide() //6
    $("#RelatorioEmprestimos").hide();//101
    $("#RelatorioLivrosExistentes").hide();//102

    $("#acao").on('change', function(){
      
        $("#autor").val('') //1
        $("#editora").val('') //2
        $("#Area").val(''); //3
        $("#titulo").val('') //4
        $("#AutorID").val('')
        // CadastroLivro
        $("#AreaID").val('')
        $("#Edicao").val('')
        $("#EditoraID").val('')
        $("#Quantidade").val('')
        $("#Paginas").val('')
        $("#Armario").val('')
        $("#Ano").val('')
        $("#Prateleira").val('')
        $("#ISBN").val('')
        //CadastroFuncionario
        $("#matricula").val('')
        $("#nomeFuncionario").val('')
        $("#CpfFuncionario").val('')
        $("#EmailFuncionario").val('')
        $("#TelefoneFuncionario").val('')
        // Cadastro Emprestimo 
        $("#AreaIDEmprestimo").val('')
        $("#LivroIDEmprestimo").val('')
        $("#DataEmprestimo").val('')
        $("#DataDevolucao").val('')
        //$("#SupervisorDevolucao").val('')
        $("#FuncionarioMatriculaDevolucao").val('')
        $("#StatusDevolucao").val('')

       
   

      
             
    
               

        if($(this).val() == 2){
            $("#RelatorioFuncionarios").hide()
            $("#DivLabelCodigoLivro").hide()
            $("#CadastroEditora").show(); //2

            $("#CadastroAutor").hide() //1//1
            $("#CadastroArea").hide(); //3
            $("#CadastroLivro").hide(); //4
            $("#CadastroFuncionario").hide() //5
            $("#CadastroEmprestimo").hide() //6
            $("#RelatorioEmprestimos").hide();//101
            $("#RelatorioLivrosExistentes").hide();//102
            $("#RelatorioAutores").empty()
            $("#RelatorioAutores").hide()
            $("#RelatorioEditoras").empty() 
            $("#RelatorioEditoras").hide() 
        }
        else if ($(this).val() == 3){
            $("#RelatorioFuncionarios").hide()
            $("#DivLabelCodigoLivro").hide()
            $("#CadastroArea").show(); //3

            $("#CadastroAutor").hide() //1
            $("#CadastroLivro").hide(); //4
            $("#CadastroEditora").hide(); //2
            $("#CadastroFuncionario").hide() //5
            $("#CadastroEmprestimo").hide() //6
            $("#RelatorioEmprestimos").hide();//101
            $("#RelatorioLivrosExistentes").hide();//102
            $("#RelatorioAutores").empty()
            $("#RelatorioAutores").hide()
            $("#RelatorioEditoras").empty() 
            $("#RelatorioEditoras").hide() 
        }
        else if ($(this).val() == 4){
            $("#RelatorioFuncionarios").hide()
            $("#DivLabelCodigoLivro").hide()
            $("#CadastroLivro").show(); //4

            $("#CadastroAutor").hide() //1
            $("#CadastroArea").hide(); //3
            $("#CadastroEditora").hide(); //2
            $("#CadastroFuncionario").hide() //5
            $("#CadastroEmprestimo").hide() //6
            $("#RelatorioEmprestimos").hide();//101
            $("#RelatorioLivrosExistentes").hide();//102
            $("#RelatorioAutores").empty()
            $("#RelatorioAutores").hide()
            $("#RelatorioEditoras").empty() 
            $("#RelatorioEditoras").hide() 
        }
        else if ($(this).val() == 5){
            $("#RelatorioFuncionarios").hide()
            $("#DivLabelCodigoLivro").hide()
            $("#CadastroFuncionario").show() //5
            

            $("#CadastroLivro").hide(); //4
            $("#CadastroAutor").hide() //1
            $("#CadastroArea").hide(); //3
            $("#CadastroEditora").hide(); //2
            $("#CadastroEmprestimo").hide() //6
            $("#RelatorioEmprestimos").hide();//101
            $("#RelatorioLivrosExistentes").hide();//102
            $("#RelatorioAutores").empty()
            $("#RelatorioAutores").hide()
            $("#RelatorioEditoras").empty() 
            $("#RelatorioEditoras").hide() 
        }
        else if ($(this).val() == 6){
            $("#RelatorioFuncionarios").hide()
            $("#DivLabelCodigoLivro").hide()
            $("#CadastroEmprestimo").show() //6

            $("#CadastroFuncionario").hide() //5
            $("#CadastroLivro").hide(); //4
            $("#CadastroAutor").hide() //1
            $("#CadastroArea").hide(); //3
            $("#CadastroEditora").hide(); //2
            $("#RelatorioEmprestimos").hide();//101
            $("#RelatorioLivrosExistentes").hide();//102
            $("#RelatorioAutores").empty()
            $("#RelatorioAutores").hide()
            $("#RelatorioEditoras").empty() 
            $("#RelatorioEditoras").hide() 
        }
        if ($(this).val() == "101"){
            //DivTabela = 'RelatorioEmprestimos'
            $("#RelatorioLivrosExistentes").empty()
            $("#RelatorioLivrosExistentes").hide()
            $("#RelatorioFuncionarios").empty()
            $("#RelatorioFuncionarios").hide()
            $("#CadastroAutor").hide() //1
            $("#CadastroEditora").hide(); //2
            $("#CadastroArea").hide(); //3
            $("#CadastroLivro").hide(); //4
            $("#CadastroFuncionario").hide() //5
            $("#CadastroEmprestimo").hide() //6
            $("#RelatorioFuncionarios").hide()
            $("#RelatorioAutores").empty()
            $("#RelatorioAutores").hide()
            $("#RelatorioEditoras").empty() 
            $("#RelatorioEditoras").hide() 
            
    
            $("#RelatorioEmprestimos").show();//101
    
          
    
            //$("#'RelatorioLivrosExistentes'").empty()
            //$("#'RelatorioLivrosExistentes'").hide()
        }
        else if ($(this).val() == "102") {
            //DivTabela = 'RelatorioLivrosExistentes'
            $("#RelatorioEmprestimos").empty()
            $("#RelatorioEmprestimos").hide()
            $("#DivLabelCodigoLivro").hide() 
            $("#RelatorioFuncionarios").empty()
            $("#RelatorioFuncionarios").hide()
            $("#RelatorioAutores").empty()
            $("#RelatorioAutores").hide()
            $("#RelatorioEditoras").empty() 
            $("#RelatorioEditoras").hide() 
    
            $("#CadastroAutor").hide() //1
            $("#CadastroEditora").hide(); //2
            $("#CadastroArea").hide(); //3
            $("#CadastroLivro").hide(); //4
            $("#CadastroFuncionario").hide() //5
            $("#CadastroEmprestimo").hide() //6
    
            $("#RelatorioLivrosExistentes").show()
    
            
        }
        else if ($(this).val() == "103"){
            //DivTabela = 'RelatorioFuncionarios'
            $("#RelatorioEmprestimos").empty()
            $("#RelatorioEmprestimos").hide()
            $("#DivLabelCodigoLivro").hide() 
            $("#RelatorioLivrosExistentes").empty()
            $("#RelatorioLivrosExistentes").hide() 
            $("#RelatorioAutores").empty()
            $("#RelatorioAutores").hide()
            $("#RelatorioEditoras").empty() 
            $("#RelatorioEditoras").hide() 

            $("#CadastroAutor").hide() //1
            $("#CadastroEditora").hide(); //2
            $("#CadastroArea").hide(); //3
            $("#CadastroLivro").hide(); //4
            $("#CadastroFuncionario").hide() //5
            $("#CadastroEmprestimo").hide() //6
    
            $("#RelatorioFuncionarios").show()
        }
        else if ($(this).val() == "104"){
            $("#RelatorioEmprestimos").empty()
            $("#RelatorioEmprestimos").hide()
            $("#DivLabelCodigoLivro").hide() 
            $("#RelatorioLivrosExistentes").empty()
            $("#RelatorioLivrosExistentes").hide() 
            $("#RelatorioEditoras").empty() 
            $("#RelatorioEditoras").hide() 

            $("#CadastroAutor").hide() //1
            $("#CadastroEditora").hide(); //2
            $("#CadastroArea").hide(); //3
            $("#CadastroLivro").hide(); //4
            $("#CadastroFuncionario").hide() //5
            $("#CadastroEmprestimo").hide() //6
    
            $("#RelatorioAutores").show()
        }
        else if ($(this).val() == "105"){
            $("#RelatorioEmprestimos").empty()
            $("#RelatorioEmprestimos").hide()
            $("#DivLabelCodigoLivro").hide() 
            $("#RelatorioLivrosExistentes").empty()
            $("#RelatorioLivrosExistentes").hide() 
            $("#RelatorioAutores").empty() 
            $("#RelatorioAutores").hide() 

            $("#CadastroAutor").hide() //1
            $("#CadastroEditora").hide(); //2
            $("#CadastroArea").hide(); //3
            $("#CadastroLivro").hide(); //4
            $("#CadastroFuncionario").hide() //5
            $("#CadastroEmprestimo").hide() //6
    
            $("#RelatorioEditoras").show() 
            
        }
        else if ($(this).val() == 1){
            $("#DivLabelCodigoLivro").hide()
            $("#CadastroAutor").show() //1

            $("#CadastroEditora").hide(); //2
            $("#CadastroArea").hide(); //3
            $("#CadastroLivro").hide(); //4
            $("#CadastroFuncionario").hide() //5
            $("#CadastroEmprestimo").hide() //6
            $("#RelatorioEmprestimos").hide();//101
            $("#RelatorioLivrosExistentes").hide();//102
            $("#RelatorioFuncionarios").hide() //103
            $("#RelatorioAutores").hide() //104
            $("#RelatorioEditoras").hide() // 105
        }
    })
}))
