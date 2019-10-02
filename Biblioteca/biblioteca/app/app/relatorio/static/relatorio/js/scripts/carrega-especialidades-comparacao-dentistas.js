
$(function() {
    $("#clinicasComparacao").bind('change keypress', (function(e) {
      if (e.which == 13){
          $('label[id="labelEspecialidadesComparacao"]').show('slow')
          $("#especialidadesComparacao").show('slow')

          var referencia = $("#referenciaComparacao").val()
          var idFilial = $("#filiaisComparacao").val().replace(/\D/g, '')
          var idLocalidade = $("#localidadesComparacao").val().replace(/\D/g, '');
          var idClinica = $("#clinicasComparacao").val().replace(/\D/g, '');
          
          if (idLocalidade == "Selecione..." || idLocalidade.length == 0){
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#localidadesComparacao').focus();
            
          }
          else{
            
              $.ajax({
                type: 'GET',
                url: '/carregaEspecialidades/' + referencia + '/'  + idFilial + '/' + idLocalidade + '/'+ idClinica + '/',
              }).done(function(dados){
                  var lista = [{"Especialidade":"Selecione..."}].concat(dados);

                  $("#especialidadesComparacao").empty();
                  lista.forEach(i =>{
                    $("#especialidadesComparacao").append(
                      $("<option></option>").attr("value", i.Especialidade).text(i.Especialidade));
                  })
                 
              });
          }
      }
}));
});

