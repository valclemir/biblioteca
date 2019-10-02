$(function() {

    $("#referencia").change(function() {     
      $.ajax({
        type: 'GET',
        url: '/carrega-todas-localidades'
      }).done(function(dados){
          var lista = [["Selecione..."]].concat(dados)

          $("#divEscondeLocalidades").empty();
          lista.forEach(i => {
            $("#divEscondeLocalidades").append(
              $("<option></option>").attr("value", i).text(i));
          })  
          
      });
    });
});
