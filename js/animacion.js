$(document).ready(function() {
    var x = document.getElementsByClassName("video-interna");
    x.preload = 'auto';
    $('.pabellon > video').get(0).pause();

     var ua = navigator.userAgent.toLowerCase(); 
     if (ua.indexOf('safari') != -1) { 
       if (ua.indexOf('chrome') > -1) {
           //alert("1") // Chrome
       } else {
           //alert("2") // Safari
           $('#video1').prop('autoplay', false);
           $('img').css('display', "block");
           document.ontouchmove = function(event){
               event.preventDefault();
           }
       }
     }

});

function ingresar(pabellon, video) {
    $("#ingreso").css('z-index', 1);
    $("#ingreso").css('display', 'none');

    $("#menu-inicio").css('z-index', 2);
    $("#menu-inicio").css('display', 'none');

    $("#interior").css('z-index', 3);
    $("#interior").css('visibility', 'visible');

    $(pabellon).css('visibility', 'visible')
    var videoInt = $(video);
    console.log(video)
    videoInt.get(0).play();
}

                    
function mostrarMenu() {
    $("#nav").fadeIn(1000);
   
}
function iniciar() {
    var videoInt = $('#video1');
    videoInt[0].play();
    $('#inicio-safari').css('display', "none");
}
function cambiarPabellon(pabNuevo) {
    var pabAnterior = $(".pabellon").filter(function() {
        return $(this).css("visibility") === "visible";
    });

    pabAnterior = $(pabAnterior).attr("id");
    var pabOculto = '#' + pabAnterior;
    if ($(pabAnterior + '> video').css('display') !== 'none') {
        $(pabOculto).css({
            opacity: 1.0,
            visibility: "visible"
        }).animate({
            opacity: 0
        }, 700, function() {
            $('.video-interna').css('display', 'none');
            $(pabOculto).css('visibility', 'hidden');
            $('.pabellon > img').css('display', 'block');
            $(pabNuevo).css({
                opacity: 0,
                visibility: "visible"
            }).animate({
                opacity: 1
            }, 600);

        });
    }
    else {
        if ($(pabAnterior + '> video').css('display') === 'none') {
            $(pabOculto).css({
                opacity: 1.0,
                visibility: "visible"
            }).animate({
                opacity: 0
            }, 700, function() {
                $(pabOculto).css('visibility', 'hidden');
                $(pabNuevo).css({
                    opacity: 0,
                    visibility: "visible"
                }).animate({
                    opacity: 1
                }, 600);

            });
        }
    }

}