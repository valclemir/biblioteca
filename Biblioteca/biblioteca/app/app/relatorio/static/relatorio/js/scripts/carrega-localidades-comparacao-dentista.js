$(function() {
    $("#filiaisComparacao").change(function() {
      
        var referencia = $('#referenciaComparacao').val()
        var filiais = $("#filiaisComparacao").val().replace(/\D/g, '');
        console.log(filiais)
        $.ajax({
          type: 'GET',
          url: '/carrega-localidades/' + referencia + '/'+ filiais + '/',
        }).done(function(dados){
            
          var lista = [{"Localidade":"Selecione..."}].concat(dados);
          
          $("#localidadesComparacao").empty();
          lista.forEach(i => {
            $("#localidadesComparacao").append(
              $("<option></option>").attr("value", i.Localidade).text(i.Localidade));
          
          });
        });
      
    });
});
