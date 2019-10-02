$(function() {

  $("#procedimentos").change(function() {     
    procedimentos = $("#procedimentos").val()
    if (procedimentos == 3 || procedimentos == 4 || procedimentos == 103 || procedimentos == 104){
                //Envia um get com a variavel para a função mostrGrafico2
            $.ajax({
              type: 'GET',
              url: '/carrega-todas-localidades'
            }).done(function(dados){
              $('#divEscondeLocalidades').empty()
              lista = [{"Localidade":"Selecione..."}].concat(dados)

              lista.forEach(i => {
                $("#divEscondeLocalidades").append(
                  $("<option></option>").attr("value", i.Localidade).text(i.Localidade));
              });
            });
    }
  })
})

