$(document).ready(function () {
    $('#video2').get(0).pause();
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

function ingresar(){
  $("#ingreso" ).css('z-index',1);
  $("#ingreso" ).css('display','none');
  
  $("#interior" ).css('z-index',3);

    //Botones links conferencias
  $("#boton-interior-edif").css('z-index',4);
  $("#boton-interior-edif" ).css('display','block');
  
  $("#boton-interior-edif2").css('z-index',5);
  $("#boton-interior-edif2" ).css('display','block');
  
  $("#boton-interior-edif3").css('z-index',6);
  $("#boton-interior-edif3" ).css('display','none');
    //Otros
  $("#boton-ingreso-edif").css('display','none');
  $("#boton-ingreso-edif").css('z-index',2);
  
  var videoInt = $('#video2');
  videoInt[0].play();
}

function iniciar() {
    var videoInt = $('#video1');
    videoInt[0].play();
    $('img').css('display', "none");
}