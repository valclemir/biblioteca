$(function() {
  $("#especialidades").bind('change keypress', (function(e) {
      if (e.which == 13){
        console.log($('#procedimentos').val())
        if ($('#procedimentos').val() == '9'){
            $('label[id="labelIdDentistasMultiple"]').show()
            $('#dentistasMultiple').show()
        }
        
        else {
            $('label[id="labelIdDentistas"]').show('slow')
            $("#dentistas").show('slow')
        }

        
        //Pega o valor no change
        var referencia = $("#referencia").val()
        var idfilial = $("#filiais").val().replace(/\D/g, '')
        var localidades = $("#localidades").val().replace(/\D/g, '');
        var especialidades = $("#especialidades").val().replace(/\D/g, '');
        var idClinica = $("#clinicas").val().replace(/\D/g, '');
        
        if (localidades == "Selecione..." || localidades.length == 0 || especialidades == "Selecione..." || especialidades.length == 0){
            
            $('#tabela').hide();
            $('#TabelaDinamica').hide();
            $('#especialidades').focus();
          
        }
        else{
            //Envia um get com a variavel para a função mostrGrafico2
            $.ajax({
              type: 'GET',
              url: '/carrega-dentistas/' + referencia + '/' + idfilial + '/' + localidades + '/' + especialidades +'/' + idClinica + '/',
              data: function(data){
                data.referencia = $("#referencia").val()
                data.idfilial = $("#filiais").val().replace(/\D/g, '')
                data.localidades = $("#localidades").val().replace(/\D/g, '');
                data.especialidades = $("#especialidades").val().replace(/\D/g, '');
                data.idClinica = $("#clinicas").val().replace(/\D/g, '');
              },
              traditional: true,
              dataSrc: '',
              success: function(dados){
                var lista = [{"idDentista":"Selecione..."}].concat(dados);
                //console.log(dados)
                $("#dentistas").empty();
                $('#dentistasMultiple').empty();
                if ($('#procedimentos').val() == '9'){
                  dados.forEach(i => {
                    $("#dentistasMultiple").append($("<option></option>").attr("value", i.idDentista).text(i.idDentista)); 
                  })
                  //$("#dentistasMultiple").selectpicker('refresh');
                }
                else {
                  lista.forEach(i => {
                    $("#dentistas").append($("<option></option>").attr("value", i.idDentista).text(i.idDentista)); 
                  })
                  //$("#dentistas").selectpicker('refresh');
                }
                
            }
        })
      
    }
  }
}))
})
    

