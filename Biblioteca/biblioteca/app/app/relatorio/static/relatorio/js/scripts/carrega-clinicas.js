$(function() {
    $("#bairro").bind('change keypress', (function(e) {
    if (e.which == 13){
            $('label[id="labelClinicas"]').show('slow')
            $("#clinicas").show('slow')
            var referencia = $("#referencia").val()
            var idFilial = $("#filiais").val().replace(/\D/g, '')
            var idLocalidade = $("#localidades").val().replace(/\D/g, '')
            var bairro = $("#bairro").val()
            

            $.ajax({
              type: 'GET',
              url: '/carrega-clinicas/' + referencia + '/' + idFilial + '/' + idLocalidade +'/' + bairro +'/',
            }).done(function(dados){
                //console.log(dados[0])
                var lista = [{"NomeDaClinica":"Selecione..."}].concat(dados);

                $('#clinicas').empty()
                lista.forEach(i => {
                  $("#clinicas").append(
                    $("<option></option>").attr("value", i .NomeDaClinica).text(i.NomeDaClinica));
                  
                });
              })
    }
           
    
  }));
});
