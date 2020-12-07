$(document).ready(function() {
    
    //Mostra menu - normal E dropdown usam a mesma estrutura 
    $('.menu-hamburger').on('click', function(){
        $(this).toggleClass('open') //Adiciona classe open ao menu-hamburger 
        $('.top-nav').toggleClass('open') //Adiciona classe open ao top-nav 
    }); //Menu hamburger 



    //Envia dados do formulário para o php através do AJAX 
    $('#formulario').submit(function(event){
        event.preventDefault();
        var nome = $('input[name=nome]').val()
        var email = $('input[name=email]').val()
        var mensagem = $('textarea[name=mensagem]').val()

        $.ajax({
            url: 'http://127.0.0.1:5500/index.php',
            method: 'POST',
            data: {
                name: nome, 
                em: email, 
                msg: mensagem, 
            },
            dataType: 'json'
        }).done(function(result){
            console.log(result)
        });
        
        
    })//Formulário 
    

}); 

    
