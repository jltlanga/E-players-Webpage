$(document).ready(function() {
  //Add all your jQuery elements hereby
  $(".btn-buy").click(function() {
    alert("Este produto não está desponível no momento");
  });


  // $(".menu-bars").click(function() {
  //   $(".menu").toggleClass("mostrarEsconderMenu")
  // });
  

});

function abreFechaMenu() {
  // navbar -tag nav
  let navbar = document.querySelector(".menu");
  navbar.classList.toggle("mostrarEsconderMenu");
}

