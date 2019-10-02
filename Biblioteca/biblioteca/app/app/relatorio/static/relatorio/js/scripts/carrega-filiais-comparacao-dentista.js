$(function() {
    $("#referenciaComparacao").bind('change keypress', (function(e) {
    if (e.which == 13){
            var referencia = $("#referenciaComparacao").val();
            $.ajax({
              type: 'GET',
              url: '/carrega-filiais/' + referencia + '/',
            }).done(function(dados){
                var lista = [{"Filiais":"Selecione..."}].concat(dados);

                $('#filiaisComparacao').empty()
                lista.forEach(i => {
                  $("#filiaisComparacao").append(
                    $("<option></option>").attr("value", i.Filiais).text(i.Filiais));
                });
              })
    }
           
    
  }));
});
