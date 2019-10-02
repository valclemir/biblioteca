$(function() {
    $("#localidades").change(function() {
        var filiais = $("#filiais").val().replace(/\D/g, '');
        var localidades = $("#localidades").val().replace(/\D/g, '');
      
        $.ajax({
            type: 'GET',
            url: '/carrega-bairros/' +filiais+ '/'+ localidades + '/',
        }).done(function(dados){
            
            var lista = [{"bairro":"Selecione..."}].concat(dados);
            
            $("#bairro").empty();
            lista.forEach(i => {
            $("#bairro").append(
                $("<option></option>").attr("value", i.bairro).text(i.bairro));
            
            });
        });
    });
});
