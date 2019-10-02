
$(function() {
      $("#divEscondeLocalidades").change(function(e) {
        
            //Pega o valor no change
             
            var idLocalidade = $("#divEscondeLocalidades").val().replace(/\D/g, '');
            console.log(idLocalidade)
            if (idLocalidade == "Selecione..." || idLocalidade.length == 0){
              console.log('IdLocalidade', idLocalidade)
              $('#tabela').hide();
              $('#TabelaDinamica').hide();
              $('#localidades').focus();
              
            }
            else {
                $.ajax({
                    type: 'GET',
                    url: '/carrega-todas-especialidades/' + idLocalidade + '/',
                  }).done(function(dados){
                    $('#divEscondeEspecialidades').empty()
                    lista = [{"Especialidade":"Selecione..."}].concat(dados)
                    lista.forEach(i => {
                      $("#divEscondeEspecialidades").append(
                        $("<option></option>").attr("value", i.Especialidade).text(i.Especialidade));
                    });
                  });
            }
            
});
});



