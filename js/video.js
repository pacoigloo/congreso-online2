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
    var miniatura = parseInt($(".muestra-congresos > video").css("height"))*0.5;
    var topFoot = (parseInt(encabezado.css('height')) * 3) + parseInt($('#contenedor-info').css('height'))+ parseInt($('#contenedor-info').css('margin-top')) + 
    parseInt($(".muestra-congresos").css("height"));
    var topMed = parseInt($("#logo-tq").css("height")) * 0.7 - 10;
    //$(".muestra-congresos").css("height", ventana.height() - encabezado.height() - pie.height());
    $(".muestra-congresos").css("top",encabezado.height());
    //$(".nombre-med").css("width",(ventana.width()/6)-5);
    $("#med").css("margin-top",topMed);
    $(".muestra-congresos > #conferencia-capitulos").css('top',miniatura + 7);
    
    if(topFoot + 60 > window.innerHeight)
    {
        $("footer").css('top',topFoot - 80);
        $("footer").css('bottom','initial');
    }else
    {
        $("footer").css('top','initial');
        $("footer").css('bottom','0');
    }
    
}