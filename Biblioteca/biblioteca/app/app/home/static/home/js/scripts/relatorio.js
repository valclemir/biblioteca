function redenrizaTabela (data, tableIdName, div){
   
   let tabela = `
   <table id="`+tableIdName+`" class="table table-striped table-bordered table-sm"  cellspacing="0" width="100%">
    <thead>
   <tr>`

   let body = `</tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td></td>
                        </tr>
                    </tbody>
                    <tfoot>
                <tr>`
    
    let final =  ` </tr>
                    </tfoot>
                    </table>`
    cabecalho = ''

    data.forEach ( v =>{

        cabecalho += '<th class="th-sm">'+v.COLUMN_NAME+'</th>'
        
    })
    console.log(cabecalho)
    document.getElementById(''+div+'').innerHTML = tabela + cabecalho + body + cabecalho + final
}






$("#acao").on("change", function(){ 
    var acao = $("#acao").val()
    var DivTabela = '' 
    
    if (acao == "101"){
        DivTabela = 'RelatorioEmprestimos'
    }
    else if (acao == "102") {
        DivTabela = 'RelatorioLivrosExistentes' 
    }
    else if (acao == "103"){
        DivTabela = 'RelatorioFuncionarios' 
    }
    else if (acao == "104"){
        DivTabela = 'RelatorioAutores'
        $("#RelatorioFuncionarios").empty()
        $("#RelatorioFuncionarios").hide()
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
    else if (acao == "105"){
        DivTabela = 'RelatorioEditoras'
        
        $("#RelatorioAutores").empty()
        $("#RelatorioAutores").hide()
        $("#RelatorioFuncionarios").empty()
        $("#RelatorioFuncionarios").hide()
        $("#RelatorioEmprestimos").empty()
        $("#RelatorioEmprestimos").hide()
        $("#DivLabelCodigoLivro").hide() 
        $("#RelatorioLivrosExistentes").empty()
        $("#RelatorioLivrosExistentes").hide() 

        $("#CadastroAutor").hide() //1
        $("#CadastroEditora").hide(); //2
        $("#CadastroArea").hide(); //3
        $("#CadastroLivro").hide(); //4
        $("#CadastroFuncionario").hide() //5
        $("#CadastroEmprestimo").hide() //6

        $("#RelatorioEditoras").show()
    }

    $.ajax({
        url: "/busca-colunas-json/"+acao,
        type: "POST",
        success: function(retornojson){
            listaJson = []

            retornojson.forEach(elemento => {
                listaJson.push(elemento)
            })
            
            
            //$("#"+DivTabela).empty()
            redenrizaTabela(listaJson, 'TabelaDinamica', DivTabela)
            $("#"+DivTabela).show()
                $('#TabelaDinamica').dataTable({
                    "ajax": {
                        url: "/busca-dados-json/"+acao,
                        type: "POST",
                        traditional: true,
                        dataSrc: "",
                    },
                    
                    "columns": (()=>{
                        let recebeLista = []
                        //percorre colunas   
                        listaJson.forEach(elemento => {
                        // console.log(element)
                            recebeLista.push({"data": elemento.COLUMN_NAME})
                            
                            //console.log('<a href="'+recebeLista+'">')
                        });

                        console.log(recebeLista)

                        return recebeLista
                        
                    })(),
                    
                    "order": [[ 0, "desc" ]],
                    "bDestroy": true,
                    "scrollY": "400px",
                    "scrollCollapse": true,
                    "scrollX": true,
                    "createdRow": function( row, data, dataIndex ) {
                        console.log(data)
                        var today = new Date();
                        var dd = String(today.getDate()).padStart(2, '0');
                        var mm = String(today.getMonth() + 1).padStart(2, '0');
                        var yyyy = today.getFullYear();
                        today = dd + '/' + mm + '/' + yyyy;
                        console.log(data["Data Devolução"], today, data["Data Devolução"] < today)
                        // Verifica se existe atraso na entrega do livro
                        if ((data["Data Devolução"] < today) && (data["Data Devolução"] == "Em aberto" || data["Status devolução"] == "Prorrogado")){
                            $( row ).css( "background-color", "red" );
                        }
                    },
                    //"retrieve": true,
                    "language": {
                        "search": "Buscar:",
                        "sEmptyTable": "Nenhum registro encontrado",
                        "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                        "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                        "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                        "sInfoPostFix": "",
                        "sInfoThousands": ".",
                        "sLengthMenu": "_MENU_ resultados por página",
                        "sLoadingRecords": "Carregando...",
                        "sProcessing": "Processando...",
                        "sZeroRecords": "Nenhum registro encontrado",
                        "sSearch": "Pesquisar",
                        "oPaginate": {
                            "sNext": "Próximo",
                            "sPrevious": "Anterior",
                            "sFirst": "Primeiro",
                            "sLast": "Último"
                        },
                        "oAria": {
                            "sSortAscending": ": Ordenar colunas de forma ascendente",
                            "sSortDescending": ": Ordenar colunas de forma descendente"
                        }
                    }
                })
                $('.dataTables_length').addClass('bs-select');
            event.preventDefault();
            if (acao == "101"){
                $("#DivLabelCodigoLivro").show()
            }
            
        },
    });
    

})
    
  

    




