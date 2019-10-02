$("#AreaIDEmprestimo").on("change", function(){
    var area_id = $("#AreaIDEmprestimo").val().replace(/\D/g, '')
    
    $.ajax({
        url: '/carrega-livros/'+area_id,
        type: 'GET',
        datatype: "",
        success: function(dados){
            console.log(dados)
            dados.forEach(i => {
                $("#LivroIDEmprestimo").empty()
                $("#LivroIDEmprestimo").append(
                    $("<option ></option>")
                    .attr("value", i.livros).text(i.livros));
            });
        }
    })
})