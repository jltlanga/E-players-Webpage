//quando a página estiver carregada/disponível
$(document).ready(function(){
    //sintaxe jQuery utiliza seletores css
    $(".btnHelloNome").click(function(){
      let nome = $("#nome").val();
     $("#texto").text(`${nome} !`);
    });




    $("#btnHello").click(function(){
        $("h1 span").text("!!");
    });

    //or
    // $("button, input").mousemove(function(){
    //     hello();
    // });
    /* -------------------------------------------------------------------------- */
    /*                                  Uso de  de jQuery Mask                    */
    /* -------------------------------------------------------------------------- */

    $("#telefone").mask("(00) 00000 - 0000")
}) 

function hello() {
    alert("Hello worldwide!");
}