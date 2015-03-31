var estadoNav = "transparente";

$(document).ready(function () {
    var alturaBackground = $(window).width()*580/1920;
    var count = true;
    
    $(window).scroll(function(){
        backgroundFixed(alturaBackground, estadoNav);
    });
    
    $(window).resize(function() {
        alturaSecciones(alturaBackground);
    });
    $(window).load(function() {
        alturaSecciones(alturaBackground);
    });
});

function alturaSecciones(alturaBackground){
    var ventana = $(window);
    var altura = ventana.height() - $("header").height();
    var miImg = $("#home-terapias > img");
    var alturaComponentes = $("#home-terapias > h1").outerHeight() + $("#home-terapias > h2").outerHeight() + $("#home-terapias > p").outerHeight() + miImg.outerHeight();
    alturaComponentes = (alturaBackground - alturaComponentes)/2;
    $("#home-terapias > h1").css("padding-top",alturaComponentes);
    var alturaPresTerapias = alturaBackground - miImg.position().top - miImg.height();
    alturaPresTerapias = ((ventana.height() - alturaBackground)*10/100)+alturaPresTerapias;
    $(".presentacion-terapias").css("top",alturaPresTerapias);
    $(".lista-medicamentos").css("height",$("#terapia-congreso2").position().top-$("#lista-medicamentos1").position().top);
}

$("#menu-fijo > div").click(function(){
    //window.location.replace(document.URL.split("#")[0]+"#terapia-congreso"+$(this).attr("id"));
    
    var target = "#terapia-congreso"+$(this).attr("id");
    var $target = $(target);
    
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });

    
    
    
});

function backgroundFixed(alturaBackground, estadoNav){
    if($(window).scrollTop() > alturaBackground){
        $("header").css("background-color","#0085c6");
    }else if($(window).scrollTop() < alturaBackground){
        $("header").css("background-color","rgba(0, 0, 0, 0)");
    }
    /*var miAlt = $("header").height();
    miAlt = miAlt*3;
    if($(window).scrollTop() > alturaBackground && estadoNav != "azul"){
        console.log("Azul");
        estadoNav = "azul";
        $("header").css("background-color","#0085c6");
        $("header").animate({ "top": "0px" }, "slow" );
    }else if($(window).scrollTop() < (alturaBackground - miAlt) && estadoNav != "transparente"){
        console.log("Transparent");
        estadoNav = "transparente";
        $("header").css("background-color","rgba(0, 0, 0, 0)");
        $("header").animate({ "top": "0px" }, "slow" );
    }else if($(window).scrollTop() > (alturaBackground - miAlt) && $(window).scrollTop() < alturaBackground && estadoNav != "oculto"){
        estadoNav = "oculto";
        console.log("Oculto: "+estadoNav);
        $("header").animate({ "top": "-100px" }, "slow");
    }*/
}
