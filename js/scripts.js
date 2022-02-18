function carrito(carro) { //Modificamos el valor del carrito
    carro = $('table tbody .producto').length;
    document.querySelector('#shopping-cart span').innerHTML = carro;

    if(carro==0){ //Si es 0 el array del carro, borramos todo
        $(".tabla").remove();
        $(".totalpedido>tbody").remove();
        $("h2").text("No hay productos en su carrito");
        $("h3").remove();

    }
}

function sumar() { //Suma de precios y resultados
    var sumasion = 0;
    var sumafin= 0;
    $(".precioproducto span").each(function () {
        sumasion += parseFloat($(this).text()); //Parseamos precios y numeros que tomamos de span
        sumafin = sumasion+5; //Suma de gastos de envio
        $("#subtotal").text(sumasion);   //Los sacamos
        $("#preciofinal").text(sumafin);

    })
}
$(document).ready(function() {
    sumar(); //Lanzamos las funciones
    carrito();

    $(".quitar").on("click", function () {
        $(this).parent('td').parent('tr').remove(); //borramos y contamos de nuevo lanzando las funciones
        sumar();
        carrito();

    });




    $(document).scroll(function() { //Nos devuelve a la parte de arriba

        if($(this).scrollTop() > 100){          
          $('#totop').fadeIn(1000);
    
        }else{          
          $('#totop').fadeOut(1000);
        }
      });
    
      $('#totop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
      });
});


