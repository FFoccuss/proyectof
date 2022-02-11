function carrito(row_no) {
    row_no = $('table tbody .producto').length;
    document.querySelector('#shopping-cart span').innerHTML = row_no;
}

function dinero(precio) { /*Muestra el precio final x pantalla*/
    document.querySelector('.totalpedido tbody tr td .preciofinal').innerHTML = precio.toFixed(2) + "&euro;";
}

function precio(precio) {
    $(".tabla>tbody> .producto>.precioproducto span").each(function() {
        precio += parseFloat($(this).text());
        dinero(precio);
    })
}

$(document).ready(function() {
    carrito();
    var precio = 0;
    /*precio(precio);
    dinero(precio);*/
    document.querySelector('.totalpedido tbody tr td .preciofinal').innerHTML = precio.toFixed(2) + "&euro;";


    $("#quitar").on("click", function() {
        $(".tabla > tbody:first-child").remove();

        precio(precio);
    });
    $(".tabla>tbody>.producto>#quitar1").on("click", function() {
        $(".tabla > tbody:last-child").remove();

        precio(precio);
    });



});