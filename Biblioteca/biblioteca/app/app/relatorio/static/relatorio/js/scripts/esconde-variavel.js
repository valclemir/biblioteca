$(function() {

  /*$('label[id="LabelprocedimentosPesquisarSelect"]').hide()
  $('#procedimentosPesquisarSelect').hide()*/
  //$("#selectDentistasPicker").hide()
  $('#ProcedimentosPesquisarALL').hide()
  $('label[id="LabelprocedimentosPesquisarSelectALL"]').hide()
  $('#procedimentosPesquisarSelectALL').hide()
  
  $('label[id="LabelprocedimentosPesquisarSelectComp"]').show()
  $('#procedimentosPesquisarSelectComp').show()
  $("#allComparacao").hide()
  //Label Clinicas
  $('label[id="labelClinicas"]').hide()
  $("#clinicas").hide()
  //Label especialidades 
  $('label[id="labelEspecialidades"]').hide()
  $("#especialidades").hide()
  //Label idDentista
  $('label[id="labelIdDentistas"]').hide()
  $("#dentistas").hide()
  //Label Procedimentos
  /*$('label[id="labelProcedimentos"]').hide()
  $("#procedimentos").hide()*/
  $('label[id="labelIdDentistasMultiple"]').hide()
  $('#dentistasMultiple').hide()

  $('label[id="Labelintervalo"]').hide()
  $('#esconde').hide()
  $('label[id="LabelSuport"]').hide()
  $('#suport').hide()

  $("#EscondePorcentagem").hide()
  $('#procedimentosPesquisar').hide()

  $("#divMsgGrupo1").hide()
  $("#divMsgGrupo2").hide()

  $("#procedimentos").on('change', function() {
      console.log($(this).val())
      if ($(this).val() == '3' || $(this).val() == '4' 
          || $(this).val() == '103' || $(this).val() == '104'){
          $('label[id="Labelintervalo"]').show('slow')
          $('#esconde').show('slow')
          $('label[id="LabelSuport"]').show('slow')
          $('#suport').show('slow')
          $('#EscondePorcentagem').hide()
          $('label[id="LabelPorcentagem"]').hide()
          $('#all').hide()
          $("#allComparacao").hide()
          $("#EscodeSuporte").show()
          $('#procedimentosPesquisar').hide()
          $('label[id="LabelprocedimentosPesquisarSelectALL"]').hide()
          $('#procedimentosPesquisarSelectALL').hide()
          $('label[id="LabelprocedimentosPesquisarSelectComp"]').hide()
          $('#procedimentosPesquisarSelectComp').hide()
          $("#divMsgGrupo1").hide()
          $("#divMsgGrupo2").hide()
          $('#ProcedimentosPesquisarALL').hide()
          $('label[id="intervaloText1"]').show()
          $('label[id="intervaloText2"]').show()

          $("#TituloMsg").hide()
          $("#tabela").hide()
          
          $("#tabelaComparacao1").hide()
          $("#tabelaComparacao2").hide()
      } 
      else if($(this).val() == "7" || $(this).val() == "107"){
        $('label[id="Labelintervalo"]').hide()
        $('#esconde').hide()
        $('label[id="LabelSuport"]').hide()
        $('#suport').hide('slow')
        $('#EscondePorcentagem').show('slow')
        $('label[id="LabelPorcentagem"]').show('slow')
        $("#all").hide()
        $("#allComparacao").hide()
        $('#procedimentosPesquisar').hide()
        $('label[id="LabelprocedimentosPesquisarSelectALL"]').hide()
        $('#procedimentosPesquisarSelectALL').hide()
        $('label[id="LabelprocedimentosPesquisarSelectComp"]').show()
        $('#procedimentosPesquisarSelectComp').show()
        $("#divMsgGrupo1").hide()
        $("#divMsgGrupo2").hide()
        $('#ProcedimentosPesquisarALL').hide()

      
        $("#TituloMsg").hide()
        $("#tabela").hide()

        $("#tabelaComparacao1").hide()
        $("#tabelaComparacao2").hide()
      }
      else if ($(this).val() == "9"){
          $("#divMsgGrupo1").show()
          $("#divMsgGrupo2").show()
          $("#allComparacao").show('slow')
          $("#all").show('slow')
            //Label Clinicas
          $('label[id="labelClinicasComparacao"]').show()
          $("#clinicasComparacao").show()
          //Label especialidades 
          $('label[id="labelEspecialidadesComparacao"]').show()
          $("#especialidadesComparacao").show()
          //Label idDentista
          $('label[id="labelIdDentistasComparacao"]').show()
          $("#dentistasComparacao").show()
          $('label[id="labelClinicas"]').show()
          $("#clinicas").show()
          //Label especialidades 
          $('label[id="labelEspecialidades"]').show()
          $("#especialidades").show()
          //Label idDentista
          //$('#procedimentosPesquisar').show()

          $('label[id="LabelprocedimentosPesquisarSelect"]').show()
          $('#procedimentosPesquisarSelect').show()
          $('label[id="LabelprocedimentosPesquisarSelectALL"]').show()
          $('#procedimentosPesquisarSelectALL').show()
          $('label[id="LabelprocedimentosPesquisarSelectComp"]').show()
          $('#procedimentosPesquisarSelectComp').show()
          $('#ProcedimentosPesquisarALL').show()

          $('label[id="labelIdDentistas"]').hide()
          $("#dentistas").hide()

          $('label[id="labelIdDentistasMultiple"]').show()
          $('#dentistasMultiple').show()
          $('label[id="intervaloText1"]').hide()
          $('label[id="intervaloText2"]').hide()
          $("#EscodeSuporte").hide()
          $("#EscondePorcentagem").hide()

      
          $("#TituloMsg").hide()
          $("#tabela").hide()

          $("#tabelaComparacao1").hide()
          $("#tabelaComparacao2").hide()
       
      }
      else {
         
          $("#TituloMsg").hide()
          $("#tabela").hide()

          $("#tabelaComparacao1").hide()
          $("#tabelaComparacao2").hide()

          $('#ProcedimentosPesquisarALL').hide()
          $('#procedimentosPesquisar').hide()
          $('label[id="Labelintervalo"]').hide('')
          $('#esconde').hide('')
          $('label[id="LabelSuport"]').hide()
          $('#suport').hide('')
          $('#EscondePorcentagem').hide('')
          $('label[id="LabelSuport"]').hide()
          $("#allComparacao").hide('slow')
          $('label[id="labelIdDentistasMultiple"]').hide()
          $('#dentistasMultiple').hide()
          $('label[id="labelClinicas"]').hide()
          $("#clinicas").hide()
          $('label[id="labelEspecialidades"]').hide()
          $("#especialidades").hide()
          $('label[id="labelIdDentistas"]').hide()

          $('label[id="LabelprocedimentosPesquisarSelect"]').hide()
          $('#procedimentosPesquisarSelect').hide()
          $('label[id="LabelprocedimentosPesquisarSelectALL"]').hide()
          $('#procedimentosPesquisarSelectALL').hide()

          $("#dentistas").hide()
          $("#all").show()
          $("#divMsgGrupo1").hide()
          $("#divMsgGrupo2").hide()
          
          
          
      }
  });
});
