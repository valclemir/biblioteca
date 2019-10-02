
function criaPopup(url) {
    popupWindow = window.open(url,'popUpWindow','height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
}

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

        cabecalho += '<th class="th-sm">'+v.column_name+'</th>'
        
    })
    //console.log(cabecalho)
    document.getElementById(''+div+'').innerHTML = tabela + cabecalho + body + cabecalho + final
}

function baixaPlanilha(procedimentos, referencia, filiais, localidades, bairro, idclinica, especialidades, dataInicio, dataFinal, dentistas, RefInicial, RefFinal, porcentagem, suport){
    var auxBairro
    console.log(bairro)
    if (bairro == "Selecione..."){
        auxBairro = ''
        window.location.assign("/baixa-planilha/"+procedimentos+"&"+referencia+"&"
                                +""+filiais+""+"&"+""+localidades +""+"&"
                                +""+auxBairro+""+"&"+""+idclinica+""+"&"
                                +""+especialidades+""+"&"+""+dentistas+""+"&"+""+dataInicio+""+"&"
                                +""+dataFinal+""+"&"+""+RefInicial+""+"&"+""+RefFinal+""+"&"
                                +""+porcentagem+""+"&"+""+suport)
    }
    else {
        console.log('Entrou ')
        window.location.assign("/baixa-planilha/"+procedimentos+"&"+referencia+"&"
        +""+filiais+""+"&"+""+localidades +""+"&"
        +""+bairro+""+"&"+""+idclinica+""+"&"
        +""+especialidades +""+"&"+""+dentistas+""+"&"+""+dataInicio+""+"&"
        +""+dataFinal+""+"&"+""+RefInicial+""+"&"+""+RefFinal+""+"&"
        +""+porcentagem+""+"&"+""+suport)
    }
    console.log(procedimentos)
}
// Monta Tabela dinamica 






function MontaTabelaDinamica(){
    var referencia = $('input[name="referencia"]').val()
    var filiais = $('select[name="filiais"]').val()
    var localidades = $('select[name="localidades"]').val()
    var bairro = $('#bairro').val()
    var idclinica = $('select[name="clinicas"]').val().replace(/\D/g, '')
    var especialidades = $('select[name="especialidades"]').val()
    var dentistas = $('select[name="dentistas"]').val()
    var procedimentos = $('select[name="procedimentos"]').val()
    var divEscondeLocalidades = $('#divEscondeLocalidades').val()
    var divEscondeEspecialidades = $('#divEscondeEspecialidades').val()
    var dataInicio = $('#dataInicio').val()
    var dataFinal = $('#dataFinal').val()
    var suport = $('#suport').val()

    var RefInicial = $('#RefInicial').val()
    var RefFinal = $('#RefFinal').val()
    var porcentagem = $('#porcentagem').val()
    
    //Deixa a variáveis apenas com o seu ID, tirando os nomes
    filiais = filiais.replace(/\D/g, '')
    localidades = localidades.replace(/\D/g, '') 
    especialidades = especialidades.replace(/\D/g, '') 
    dentistas = dentistas

    
    console.log('PROCEDIMENTOS', $('#referencia').val(), dentistas, localidades)

    if (procedimentos == "101"){
        if ((referencia.length != 0)) {
            baixaPlanilha(procedimentos, referencia, filiais, 
                         localidades, bairro, idclinica, especialidades, 
                         dataInicio, dataFinal, dentistas, RefInicial, 
                         RefFinal, porcentagem, suport)
        }
        else {
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#referencia').focus();
        }
    }
    else if (procedimentos == "102"){
        if ((referencia.length != 0)) {
            baixaPlanilha(procedimentos, referencia, filiais, 
                         localidades, bairro, idclinica, especialidades, 
                         dataInicio, dataFinal, dentistas, 
                         RefInicial, RefFinal, porcentagem, suport)
        }
        else {
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#referencia').focus();
        }
    }
    else if (procedimentos == "103"){
        if ((divEscondeLocalidades != "Selecione...")) {
            if (divEscondeEspecialidades != "Selecione..."){
                if (dataInicio != 0) {
                    if(dataFinal != 0){
                        if(suport != 0){
                            baixaPlanilha(procedimentos, referencia, filiais, 
                                        divEscondeLocalidades.replace(/\D/g, ''), bairro,
                                        idclinica, divEscondeEspecialidades.replace(/\D/g, ''), 
                                        dataInicio, dataFinal, dentistas, 
                                        RefInicial, RefFinal, porcentagem, suport)
                        }
                        else{
                            $('#tabela').hide();
                            $('#TabelaDinamica').hide();
                            $('#suport').focus()
                        }
                    }
                    else{
                        $('#tabela').hide();
                        $('#TabelaDinamica').hide();
                        $('#dataFinal').focus();  
                    }
                }
                else{
                    $('#tabela').hide();
                    $('#TabelaDinamica').hide();
                    $('#dataInicio').focus();        
                }
                
            }
            else {
                $('#tabela').hide();
                $('#TabelaDinamica').hide();
                $('#divEscondeEspecialidades').focus();
            }
        }
        else {
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#divEscondeLocalidades').focus();
        }
    }
    else if (procedimentos == "104"){
        if ((divEscondeLocalidades != "Selecione...")) {
            if (divEscondeEspecialidades != "Selecione..."){
                if (dataInicio != 0) {
                    if(dataFinal != 0){
                        if(suport != 0){
                            baixaPlanilha(procedimentos, referencia, filiais, 
                                divEscondeLocalidades.replace(/\D/g, ''), bairro,
                                idclinica, divEscondeEspecialidades.replace(/\D/g, ''),
                                dataInicio, dataFinal, dentistas, 
                                RefInicial, RefFinal, porcentagem, suport)
                        }
                        else{
                            $('#tabela').hide();
                            $('#TabelaDinamica').hide();
                            $('#suport').focus()
                        }
                    }
                    else{
                        $('#tabela').hide();
                        $('#TabelaDinamica').hide();
                        $('#dataFinal').focus();  
                    }
                }
                else{
                    $('#tabela').hide();
                    $('#TabelaDinamica').hide();
                    $('#dataInicio').focus();        
                }
                
            }
            else {
                $('#tabela').hide();
                $('#TabelaDinamica').hide();
                $('#divEscondeEspecialidades').focus();
            }
        }
        else {
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#divEscondeLocalidades').focus();
        }
    }
    else if (procedimentos == "105"){
        if ((referencia.length != 0)) {
            baixaPlanilha(procedimentos, referencia, filiais, 
                        localidades, bairro, idclinica, especialidades, 
                        dataInicio, dataFinal, dentistas, 
                        RefInicial, RefFinal, porcentagem, suport)
        }
        else {
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#referencia').focus();
        }
    }
    else if (procedimentos == "106"){
        if ((referencia.length != 0)) {
            baixaPlanilha(procedimentos, referencia, filiais, 
                         localidades, bairro, idclinica, especialidades, 
                        dataInicio, dataFinal, dentistas, 
                        RefInicial, RefFinal, porcentagem, suport)
        }
        else {
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#referencia').focus();
        }
    }
    else if (procedimentos == "107"){
        if (RefInicial.length != 0) {
            if (RefFinal.length != 0){
                if (porcentagem.length != 0){
                    baixaPlanilha(procedimentos, referencia, filiais, 
                                    localidades, bairro, idclinica, especialidades, 
                                    dataInicio, dataFinal, dentistas, 
                                    RefInicial, RefFinal, porcentagem, suport)
                }
                else{
                    $('#tabela').hide();
                    $('#TabelaDinamica').hide();
                    $('#porcentagem').focus();
                }
            }
            else{
                $('#tabela').hide();
                $('#TabelaDinamica').hide();
                $('#RefFinal').focus();
            }
        }
        else {
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#RefInicial').focus();
        }
    }
    else {
        // Verifica preenchimento dos campos e força o preenchimento dos mesmos...
        console.log('Procedimentos', procedimentos, 'DATAFINAL', dataFinal)
        if (referencia.length == 0 && (procedimentos == 1 || procedimentos == 2 
                                        || procedimentos == 8 || procedimentos == 9 )){
            //$( "#divMsgReferencia" ).html( "<b>Campo obrigatório!</b>" ).css("color", "red");
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#referencia').focus();
        }
        else if ((procedimentos == 3 || procedimentos ==4) && (divEscondeLocalidades == 'Selecione...' || divEscondeLocalidades.length == 0)){
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#divEscondeLocalidades').focus();
        }
        else if ((procedimentos == 3 || procedimentos ==4) && (divEscondeEspecialidades == 'Selecione...' || divEscondeEspecialidades.length == 0)){
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#divEscondeEspecialidades').focus();
        }
        else if ((procedimentos == 3 || procedimentos ==4) && (dataInicio.length == 0)){
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#dataInicio').focus();
        }
        else if ((procedimentos == 3 || procedimentos ==4) && (dataFinal.length == 0)){
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#dataFinal').focus();
        }
        else if ((procedimentos == 3 || procedimentos ==4) && (suport.length == 0)){
            //$("#TituloMsg").hide();
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#suport').focus();
        } 
        else if ((procedimentos == 5 && referencia.length == 0)){
            //$("#TituloMsg").hide();
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#referencia').focus();
        } 
        else if ((procedimentos == 6 && referencia.length == 0)){
            //$("#TituloMsg").hide();
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#referencia').focus();
        } 
        else if ((procedimentos == 7 && RefInicial.length == 0)){
            //$("#TituloMsg").hide();
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#RefInicial').focus();
        } 
        else if ((procedimentos == 7 && RefFinal.length == 0)){
            //$("#TituloMsg").hide();
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#RefFinal').focus();
        } 
        else if ((procedimentos == 7 && porcentagem.length == 0)){
            //$("#TituloMsg").hide();
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#porcentagem').focus();
        } 
       
        
        else if (procedimentos == 9 && filiais.length == 0){
            $('select[name="filiais"]').focus()
        }
        else if (procedimentos == 9 && (localidades.length == 0 || localidades == "Selecione...")){
            $('select[name="localidades"]').focus()
        }
        else if (procedimentos == 9 && (bairro.length == 0 || bairro == "Selecione...")){
            $('#bairro').focus()
        }
        else if (procedimentos == 9 && idclinica.length ==0){
            $('select[name="clinicas"]').focus()
        }
        else if (procedimentos == 9 && especialidades.length == 0){
            $('select[name="especialidades"]').focus()
        }
        else if (procedimentos == 9 && $('select[name="dentistasMultiple"]').val() == null){
            $('select[name="dentistasMultiple"]').focus()
        }
        else if(procedimentos == 9 && $('select[name="procedimentosPesquisarSelectALL"]').val() == null){
            $('select[name="procedimentosPesquisarSelectALL"]').focus()
        }
        else if (procedimentos == 9 && $('#referenciaComparacao').val() == null){
            $('#referenciaComparacao').focus()
        }
        
        else { // Se não tiver nenhum campo com ausência de preenchimento, a tabela é montada
            //Exibe mensagem de titulo

            if (procedimentos == "1"){
                $("#TituloMsg").html("<h4>\
                                        <strong>EXTRAÇÃO DA PRODUÇÃO DOS DENTISTAS</strong>\
                                </h4>")
                $("#TituloMsg").show()
            }
            else if (procedimentos == "2"){
                $("#TituloMsg").html("<h4>\
                                    <strong>GLOSAS EXTRAIDAS DA REFERÊNCIA</h1></strong>\
                                </h4> ")
                $("#TituloMsg").show()
            }
            else if (procedimentos == "3"){
                if (dataInicio < dataFinal){
                    $("#TituloMsg").html("<h4>\
                                        <strong>COMBINAÇÕES DE PROCEDIMENTOS DIARIOS MAIS FREQUENTES NOS TRATAMENTOS</strong>\
                                </h4> ")
                    $("#TituloMsg").show()
                    $("#msgInvertaloSuporte").hide()
                    
                }
                else {
                    $("#msgInvertaloSuporte").html("<h5>\
                                        <strong>Data inicial é maior que a final</strong>\
                                </h5> ").css('color', 'red')
                    $("#msgInvertaloSuporte").show()
                    //alert('Data inicial é maior que a final!')
                    $("#dataFinal").focus()
                    return 
                }
                
            }
            else if (procedimentos == "4"){
                if (dataInicio < dataFinal){
                    $("#TituloMsg").html("<h4>\
                    <strong>COMBINAÇÕES DE PROCEDIMENTOS POR DENTE E FACE DIARIOS MAIS FREQUENTES NOS TRATAMENTOS</strong>\
                                </h4> ")
                    $("#TituloMsg").show()
                    $("#msgInvertaloSuporte").hide()
                    
                }
                else {
                    $("#msgInvertaloSuporte").html("<h5>\
                                        <strong>Data inicial é maior que a final</strong>\
                                </h5> ").css('color', 'red')
                    $("#msgInvertaloSuporte").show()
                    //alert('Data inicial é maior que a final!')
                    $("#dataFinal").focus()
                    return 
                }
            }
            else if (procedimentos == "5"){
                $("#TituloMsg").html("<h4>\
                    <strong>PROCEDIMENTOS LIBERADOS</strong>\
                </h4> ")
                $("#TituloMsg").show()
            }
            else if (procedimentos == "6"){
                $("#TituloMsg").html("<h4>\
                    <strong>SÍNTESE DOS PROCEDIMENTOS</strong>\
                </h4> ")
                $("#TituloMsg").show()
            }
            else if (procedimentos == "7"){
                $("#TituloMsg").html("<h4>\
                                        <strong>PREDIÇÃO DE PROCEDIMENTOS</strong>\
                                </h4> ")
                $("#TituloMsg").show()
            }
            else if (procedimentos == "9"){
                $("#TituloMsg").html("<h4>\
                                        <strong>COMPARAÇÃO DE PROCEDIMENTOS ENTRE DENTISTAS</strong>\
                                </h4> ")
                $("#TituloMsg").show()
            }
            $('#tabela').show();
            //$('#TabelaDinamica').show();
            $.ajax({
                url: "/busca-colunas-json",
                type: "POST",
                data : {'procedimentos':procedimentos},
                success: function(retornojson){
                    //console.log("AGORA VAI", retornojson)
                    listaJson = []
    
                    retornojson.forEach(elemento => {
                        listaJson.push(elemento)
                        
                        
                    })
                    console.log("LISTA JSON", listaJson)
                    var listaProcedimentos = ''
                    if ($('select[name="dentistas"]').val() != null){
                        dentistas = $('select[name="dentistas"]').val()
                    }
                    else if ($('select[name="dentistasMultiple"]').val() != null){
                        dentistas = $('select[name="dentistasMultiple"]').val()
                    }
                    if ($('select[name="procedimentosPesquisarSelectComp"]').val() != null){
                        listaProcedimentos = $('select[name="procedimentosPesquisarSelectComp"]').val()
                        console.log(listaProcedimentos)
                    }
                    if ($('select[name="procedimentosPesquisarSelectALL"]').val() != null){
                        listaProcedimentos = $('select[name="procedimentosPesquisarSelectALL"]').val()
                        console.log(listaProcedimentos)
                    }
                    
                    var DivTabela = ''
                    if ($("#procedimentos").val() == "9"){
                        DivTabela = 'tabelaComparacao1'
                    }
                    else{
                        DivTabela = 'tabela'
                    }
                    
                    if (bairro == "Selecione..."){
                        bairro = ''
                    }

                    
                    redenrizaTabela(listaJson, 'TabelaDinamica', DivTabela)
                    $("#"+DivTabela).show()
                        $('#TabelaDinamica').dataTable({
                            "ajax": {
                                url: "/busca-dados-json",
                                type: "POST",
                                data : function(data){
                                    //Dados para o post
                                    //console.log($('#dataInicio').val(), $('#dataFinal').val(), $('#clinicas').val())
                                    data.referencia = $('#referencia').val(),
                                    data.filiais =  $('#filiais').val().replace(/\D/g, '') ,
                                    data.localidades = $('#localidades').val().replace(/\D/g, ''),
                                    data.bairro = bairro
                                    data.clinicas = $('#clinicas').val().replace(/\D/g, ''),
                                    data.especialidades = $('#especialidades').val().replace(/\D/g, '') ,
                                    
                                    //data.dentistas = $('select[name="dentistas"]').val()
                                    
                                    data.dentistas = dentistas
                                    
                                    data.procedimentos = $('#procedimentos').val()
                                    data.listaProcedimentos = listaProcedimentos

                                    

                                    //Label 3 e 4
                                    data.divEscondeLocalidades = $('#divEscondeLocalidades').val().replace(/\D/g, '')
                                    data.divEscondeEspecialidades = $('#divEscondeEspecialidades').val().replace(/\D/g, '')
                                    data.dataInicio = dataInicio
                                    data.dataFinal = dataFinal
                                    data.suport = $('#suport').val()
                                    
                                    //Label 7
                                    data.RefInicial = $("#RefInicial").val()
                                    data.RefFinal = $("#RefFinal").val()
                                    data.porcentagem = $("#porcentagem").val()
                                    
                                },
                                traditional: true,
                                dataSrc: "",
                            },
                            
                            "columns": (()=>{
                                let recebeLista = []
                                //percorre colunas   
                                listaJson.forEach(elemento => {
                                // console.log(element)
                                    recebeLista.push({"data": elemento.column_name})
                                    
                                    //console.log('<a href="'+recebeLista+'">')
                                });
    
                                recebeLista.forEach(linhas => {
                                    if (linhas.data == 'idDentista'){
                                        linhas['render'] = function(data, type, row, meta){
                                            console.log(data);
                                            if(type === 'display'){
                                                data = '<a style="color: inherit;" href=http://127.0.0.1:5001/busca-dentistas/' + data + ' onclick="criaPopup(this.href);return false"' +'/>' + data 
                                                //console.log(data)
                                            }
                                        
                                        return data;
                                        }
                                    }
                                })
    
                                return recebeLista
                                
                            })(),
                            
                            "order": [[ 1, "desc" ]],
                            "bDestroy": true,
                            "scrollY": "400px",
                            "scrollCollapse": true,
                            "scrollX": true,
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
                    //$('#TabelaDinamica').show();
                
                
        
            
                },
                //datatype: "json"
                
            });

            
            // *************************************************//
            //**************************PARTE 2 ****************//
            // *************************************************//
            referenciaComparacao = $('#referenciaComparacao').val()
            filiaisComparacao = $('#filiaisComparacao').val()
            localidadesComparacao = $('#localidadesComparacao').val()
            bairroComparacao = $("#bairroComparacao").val() 
            clinicasComparacao = $('#clinicasComparacao').val()
            especialidadesComparacao = $('#especialidadesComparacao').val() 

            if (procedimentos != 9){
                return 
            }
            
            else if (procedimentos == 9 && referenciaComparacao.length == 0){
                    $('#referenciaComparacao').focus()
            }
            else if (procedimentos == 9 && (filiaisComparacao.length == 0 || filiaisComparacao == "Selecione...")){
                $('#filiaisComparacao').focus()
            }
            else if (procedimentos == 9 && (localidadesComparacao.length == 0 || localidadesComparacao == "Selecione...")){
                $('#localidadesComparacao').focus()
            }
            else if (procedimentos == 9 && (bairroComparacao.length == 0 || bairroComparacao == "Selecione...")){
                $('#bairroComparacao').focus()
            }
            else if (procedimentos == 9 && (clinicasComparacao.length == 0 || clinicasComparacao == "Selecione...")){
                $('#clinicasComparacao').focus()
            }
            else if (procedimentos == 9 && (especialidadesComparacao.length == 0 || especialidadesComparacao == "Selecione...")){
                $('#especialidadesComparacao').focus()
            }
            else if (procedimentos == 9 && $('select[name="dentistasComparacao"]').val() == null){
                $('select[name="dentistasComparacao"]').focus()
            }
            else if(procedimentos == 9 && $('select[name="procedimentosPesquisarSelectComp"]').val() == null){
                $('select[name="procedimentosPesquisarSelectComp"]').focus()
            }
        
            else {
                $.ajax({
                    url: "/busca-colunas-json",
                    type: "POST",
                    data : {'procedimentos':procedimentos},
                    success: function(retornojson){
                        //console.log("AGORA VAI", retornojson)
                        listaJson = []
            
                        retornojson.forEach(elemento => {
                            listaJson.push(elemento)
                            
                            
                        })
                        console.log("LISTA JSON 2", listaJson)
    
                        
                        var DivTabela = ''
                        if ($("#procedimentos").val() == "9"){
                            DivTabela = 'tabelaComparacao2'
                        }
                        else{
                            DivTabela = 'tabela'
                        }

                        var bairroComparacao = $("#bairroComparacao").val()
                        if (bairroComparacao == "Selecione..."){
                            bairroComparacao = ''
                        }
                        
                          
                        
                        redenrizaTabela(listaJson, 'TabelaDinamica2', DivTabela)
                        $("#"+DivTabela).show()
                            $('#TabelaDinamica2').dataTable({
                                "ajax": {
                                    url: "/busca-dados-json",
                                    type: "POST",
                                    data : function(data){
                                        //Dados para o post
                                        //console.log($('#dataInicio').val(), $('#dataFinal').val(), $('#clinicas').val())
                                        data.referencia = $('#referenciaComparacao').val(),
                                        data.filiais =  $('#filiaisComparacao').val().replace(/\D/g, '') ,
                                        data.localidades = $('#localidadesComparacao').val().replace(/\D/g, ''),
                                        data.bairro = bairroComparacao
                                        data.clinicas = $('#clinicasComparacao').val().replace(/\D/g, ''),
                                        data.especialidades = $('#especialidadesComparacao').val().replace(/\D/g, '') ,
                                        
                                        //data.dentistas = $('select[name="dentistas"]').val()
                                        
                                        data.dentistas = $('select[name="dentistasComparacao"]').val()
                                        
                                        data.procedimentos = $('#procedimentos').val()
                                        data.listaProcedimentos = $('select[name="procedimentosPesquisarSelectComp"]').val()
                                        
                                    },
                                    traditional: true,
                                    dataSrc: "",
                                },
                                
                                "columns": (()=>{
                                    let recebeLista = []
                                    //percorre colunas   
                                    listaJson.forEach(elemento => {
                                    // console.log(element)
                                        recebeLista.push({"data": elemento.column_name})
                                        
                                        //console.log('<a href="'+recebeLista+'">')
                                    });
            
                                    
                                    return recebeLista
                                    
                                })(),
                                
                                "order": [[ 1, "desc" ]],
                                "bDestroy": true,
                                "scrollY": "400px",
                                "scrollCollapse": true,
                                "scrollX": true,
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
                        //$('#TabelaDinamica').show();
                    
                    
            
                
                    },
                    //datatype: "json"
                    
                });
            }
            
        }}
    
    
};
    




