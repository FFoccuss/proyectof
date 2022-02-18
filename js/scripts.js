function carrito(carro) {
    carro = $('table tbody .producto').length;
    document.querySelector('#shopping-cart span').innerHTML = carro;

}
$(document).ready(function() {

    function sumar() {
        var sumasion = 0;
        var sumafin= 0;
        $(".tabla> tbody> .producto>.precioproducto span").each(function () {
            sumasion += parseFloat($(this).text());
            sumafin = sumasion+5;
            $("#subtotal").text(sumasion);   
            $("#preciofinal").text(sumafin);

        })
    }
    sumar();
    carrito();

    $(".quitar").on("click", function () {
        $(this).parent('td').parent('tr').remove();
        sumar();
        carrito();

    });
    $(document).scroll(function() {

        if($(this).scrollTop() > 30){          
          $('#totop').fadeIn(500);
    
        }else{          
          $('#totop').fadeOut(500);
        }
      });
    
      $('#totop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
      });
});


