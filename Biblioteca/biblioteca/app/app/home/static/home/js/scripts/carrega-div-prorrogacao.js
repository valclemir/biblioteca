function carregaDivProrrogacao(obj) {

    var BaixaStatusDevolucao = obj.value
       
    console.log('AQUI', BaixaStatusDevolucao)
    if (BaixaStatusDevolucao == "Prorrogado"){
        $("#divBaixaDataProrrogacao").show()
        
    }
    else {
        $("#divBaixaDataProrrogacao").hide()
    }
}
   
