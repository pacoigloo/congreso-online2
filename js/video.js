$(document).ready(function () {
    $(window).resize(function() {
        alturaSecciones();
    });
    $(window).load(function() {
        alturaSecciones();
    });
});

function alturaSecciones(){
    var ventana = $(window);
    var encabezado = $("header");
    var pie = $("footer");
    $(".muestra-congresos").css("height", ventana.height() - encabezado.height() - pie.height());
    $(".muestra-congresos").css("top",encabezado.height());
    $("footer > div").css("width",(ventana.width()/6)-5);
}