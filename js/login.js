// Inicializa o jQuery
$(".sigin").ready(function() {
    // masks
    $("#cpf").mask("000.000.000-00");
    // funções
    // validação do formulário
    $(".signin").click(function() {
        // pegar os dados dos campos
        let cpf = $("#cpf").val();
        let usuario = $("#usuario").val();    
        let senha = $("#senha").val();    

        // trim() - remove os espaços em branco em uma string
        if(cpf.trim() == "" || usuario.trim() == "" || senha ==""){
            alert("Favor preencher todos os campos");
        }else {
            $(".mensagem").text("Dados prontos para cadastrar!!");
            
        }
    });
});