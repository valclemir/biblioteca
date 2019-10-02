$(function() {
    $("#localidadesComparacao").change(function() {
        var filiais = $("#filiaisComparacao").val().replace(/\D/g, '');
        var localidades = $("#localidadesComparacao").val().replace(/\D/g, '');
      
        $.ajax({
            type: 'GET',
            url: '/carrega-bairros/' +filiais+ '/'+ localidades + '/',
        }).done(function(dados){
            
            var lista = [{"bairro":"Selecione..."}].concat(dados);
            
            $("#bairroComparacao").empty();
            lista.forEach(i => {
            $("#bairroComparacao").append(
                $("<option></option>").attr("value", i.bairro).text(i.bairro));
            
            });
        });
    });
});
