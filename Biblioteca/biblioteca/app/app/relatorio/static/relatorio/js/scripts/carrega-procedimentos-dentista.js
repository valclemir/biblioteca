
$(function() {
    $("#dentistasMultiple").bind('change keypress', function(e) {
        referencia = $('#referencia').val()
        filiais = $('#filiais').val().replace(/\D/g, '')
        localidades = $('#localidades').val().replace(/\D/g, '')
        bairro = $("#bairro").val()
        clinicas = $('#clinicas').val().replace(/\D/g, '')
        especialidades = $('#especialidades').val().replace(/\D/g, '')
        dentistas = $('#dentistasMultiple').val()
        if (e.which == 13){
          $.ajax({
            type: 'GET',
            url: '/carrega-procedimentos/'+referencia+'/'+filiais+'/'
                  +localidades+'/'+clinicas+'/'+especialidades+'/'+dentistas + '/' + bairro,
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
              //var lista = [{"Procedimento":"Selecione..."}].concat(dados);

              $("#procedimentosPesquisarSelectALL").empty();
              dados.forEach(i =>{
                $("#procedimentosPesquisarSelectALL").append(
                  $("<option></option>").attr("value", i.Procedimento).text(i.Procedimento));
                  
              })
              $("#procedimentosPesquisarSelectALL").selectpicker('refresh');
             
             
          }
          
          
        })
      }
      })
             
          
})


