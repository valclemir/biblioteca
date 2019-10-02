$(function() {
      $("#referencia").bind('change keypress', (function(e) {
      if (e.which == 13){
              var referencia = $("#referencia").val();
              $.ajax({
                type: 'GET',
                url: '/carrega-filiais/' + referencia + '/',
              }).done(function(dados){
                  var lista = [{"Filiais":"Selecione..."}].concat(dados);

                  $('#filiais').empty()
                  lista.forEach(i => {
                    $("#filiais").append(
                      $("<option></option>").attr("value", i.Filiais).text(i.Filiais));
                  });
                })
      }
             
      
    }));
});
