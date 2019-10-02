
$(function() {
      $("#clinicas").bind('change keypress', (function(e) {
        if (e.which == 13){
            $('label[id="labelEspecialidades"]').show('slow')
            $("#especialidades").show('slow')
            
            var referencia = $('#referencia').val()
            var idFilial = $('#filiais').val().replace(/\D/g, '');
            var idLocalidade = $("#localidades").val().replace(/\D/g, '');
            var idClinica = $("#clinicas").val().replace(/\D/g, '');

            if (idLocalidade == "Selecione..." || idLocalidade.length == 0){
              $('#tabela').hide();
              $('#TabelaDinamica').hide();
              $('#localidades').focus();
              
            }
            else{
              
                $.ajax({
                  type: 'GET',
                  url: '/carregaEspecialidades/' + referencia + '/'  + idFilial + '/' + idLocalidade + '/'+ idClinica + '/',
                }).done(function(dados){
                    var lista = [{"Especialidade":"Selecione..."}].concat(dados);

                    $("#especialidades").empty();
                    lista.forEach(i =>{
                      $("#especialidades").append(
                        $("<option></option>").attr("value", i.Especialidade).text(i.Especialidade));
                    })
                   
                });
            }
        }
}));
});

