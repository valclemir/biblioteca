$(function() {
    $("#bairroComparacao").bind('change keypress', (function(e) {
    if (e.which == 13){
            $('label[id="labelClinicasComparacao"]').show('slow')
            $("#clinicasComparacao").show('slow')

            var referencia = $("#referenciaComparacao").val()
            var idFilial = $("#filiaisComparacao").val().replace(/\D/g, '')
            var idLocalidade = $("#localidadesComparacao").val().replace(/\D/g, '');
            var bairro = $("#bairroComparacao").val()

            $.ajax({
              type: 'GET',
              url: '/carrega-clinicas/' + referencia + '/' + idFilial + '/' + idLocalidade +'/' + bairro + '/',
            }).done(function(dados){
                //console.log(dados[0])
                var lista = [{"NomeDaClinica":"Selecione..."}].concat(dados);

                $('#clinicasComparacao').empty()
                lista.forEach(i => {
                  $("#clinicasComparacao").append(
                    $("<option></option>").attr("value", i .NomeDaClinica).text(i.NomeDaClinica));
                  
                });
              })
    }
           
    
  }));
});
