$(function() {
    $("#filiais").change(function() {
      var filiais = $("#filiais").val().replace(/\D/g, '');
      var referencia = $('#referencia').val()
       $.ajax({
        type: 'GET',
        url: '/carrega-localidades/' +referencia+ '/'+ filiais + '/',
      }).done(function(dados){
          
        var lista = [{"Localidade":"Selecione..."}].concat(dados);
        
        $("#localidades").empty();
        lista.forEach(i => {
          $("#localidades").append(
            $("<option></option>").attr("value", i.Localidade).text(i.Localidade));
        
        });
      });
    });
});
