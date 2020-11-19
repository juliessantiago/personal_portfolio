$(document).ready(function() {
    $('.menu-hamburger').on('click', function(){
        $(this).toggleClass('open') //Adiciona classe open ao menu-hamburger 
        $('.top-nav').toggleClass('open') //Adiciona classe open ao top-nav 
        
    }

)}); 