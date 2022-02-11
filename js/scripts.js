$(document).ready(function() {

    function precio(){
        var preciototal = 0.00;
        var preciodatos = "";
        var preciocontasion = "";
      
        $(".product").each(function(){
          preciodatos = parseFloat($(this).find(".tp-sel > option:selected").data("price")) || 0;
          preciocontasion = parseFloat($(this).find(".tp-sel-count > option:selected").data("count")) || 0;
          console.log("Price: " + preciodatos + "Count:" +preciocontasion);
          preciototal += preciodatos * preciodatos;
        })
        $("#price").html(preciototal.toFixed(2));
      }
      
      
      $("#countprice").click(function(){
        precio();
      });


});