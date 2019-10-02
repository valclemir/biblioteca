
$(function() {
    $("#dentistasComparacao").bind('change keypress', (function(e) {
        referencia = $('#referenciaComparacao').val()
        filiais = $('#filiaisComparacao').val().replace(/\D/g, '')
        localidades = $('#localidadesComparacao').val().replace(/\D/g, '')
        bairro = $("#bairroComparacao").val()
        clinicas = $('#clinicasComparacao').val().replace(/\D/g, '')
        especialidades = $('#especialidadesComparacao').val().replace(/\D/g, '')
        dentistas = $('#dentistasComparacao').val()
        if (e.which == 13){
          $.ajax({
            type: 'GET',
            url: '/carrega-procedimentos/'+referencia+'/'+filiais+'/'
                  +localidades+'/'+clinicas+'/'+especialidades+'/'+dentistas +'/' + bairro,
            data: function(data){
              data.referencia = referencia
              data.filiais = filiais
              data.localidades = localidades
              data.clinicas = clinicas
              data.especialidades = especialidades
              data.dentistas = dentistas
              
            },
            traditional: true,
            dataSrc: "", 
            
            success: function(dados){
              //var lista = [{"Especialidade":"Selecione..."}].concat(dados);

              $("#procedimentosPesquisarSelectComp").empty();
              dados.forEach(i =>{
                $("#procedimentosPesquisarSelectComp").append(
                  $("<option></option>").attr("value", i.Procedimento).text(i.Procedimento));
              })
              $("#procedimentosPesquisarSelectComp").selectpicker('refresh');
             
          }})
        }
      }));
             
          
})


