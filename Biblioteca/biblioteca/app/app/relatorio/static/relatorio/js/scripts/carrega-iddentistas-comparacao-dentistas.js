$(function() {
    $("#especialidadesComparacao").bind('change keypress', (function(e) {
        if (e.which == 13){
            $('label[id="labelIdDentistasComparacao"]').show('slow')
            $("#dentistasComparacao").show('slow')
            //Pega o valor no change
            var referencia = $("#referenciaComparacao").val()
            var idFilial = $("#filiaisComparacao").val().replace(/\D/g, '')
            var idLocalidade = $("#localidadesComparacao").val().replace(/\D/g, '');
            var especialidades = $("#especialidadesComparacao").val().replace(/\D/g, '');
            var idClinica = $("#clinicasComparacao").val().replace(/\D/g, '');
            
            
            if (localidades == "Selecione..." || localidades.length == 0 || especialidades == "Selecione..." || especialidades.length == 0){
                
                $('#tabela').hide();
                $('#TabelaDinamica').hide();
                $('#especialidadesComparacao').focus();
              
            }
            else{
                //Envia um get com a variavel para a função mostrGrafico2
                $.ajax({
                  type: 'GET',
                  url: '/carrega-dentistas/'+ referencia + '/' + idFilial + '/' + idLocalidade + '/' + especialidades +'/' + idClinica + '/',
                }).done(function(dados){
                    //var lista = [{"idDentista":"Selecione..."}].concat(dados);
                    //console.log(dados)
                    $("#dentistasComparacao").empty();
                    dados.forEach(i => {
                      $("#dentistasComparacao").append($("<option></option>").attr("value", i.idDentista).text(i.idDentista)); 
                    })
                });
            }
        
      }
      }));
  });
  