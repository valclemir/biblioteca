function carregaDivProrrogacao(obj) {

    var BaixaStatusDevolucao = obj.value
       
    console.log('AQUI', BaixaStatusDevolucao)
    if (BaixaStatusDevolucao == "Prorrogar"){
        $("#divBaixaDataProrrogacao").show()
        
    }
    else {
        $("#divBaixaDataProrrogacao").hide()
    }
}
   
