$(document).ready(function() {
    
    //Mostra menu - normal E dropdown usam a mesma estrutura 
    $('.menu-hamburger').on('click', function(){
        $(this).toggleClass('open') //Adiciona classe open ao menu-hamburger 
        $('.top-nav').toggleClass('open') //Adiciona classe open ao top-nav 
    }); //Menu hamburger 

    
    $('#formulario').submit(function(event){
        event.preventDefault();  
        
        var  nome = $("input[type=text][name=nome]").val(); 
        var  email = $("input[type=email][name=email]").val(); 
        var  mensagem = $("textarea[name=mensagem]").val(); 

        console.log (nome, email, mensagem); //Esta ok 
        
        
        $.ajax({
            url : "source/index.php",
            type : 'POST',
            data : {
                key_nome : nome,
                key_email : email,
                key_mensagem : mensagem,
            },
            dataType: 'json', 
            beforeSend : function(){
                console.log('Enviando dados'); 
            }
       })
       .done(function(retorno){ //Não indica sucesso do insert, mas do Ajax
        $('#formulario').each (function(){
            this.reset();
          });
            return (swal({
                    title: 'Obrigada por seu contato!',
            }))
       })
       .fail(function(retorno){
            console.log('RESPOSTA DO PHP:' + retorno); 
       }); 
  
    }); 


    
    
    //Faz o scroll da página 
    $('.topo').click(function(event){
        event.preventDefault(); //Retirando comportamento padrão da âncora
        $('html, body').animate({scrollTop: 0}, 1200); //velocidade em ms 
    }); 

    // Exibe ou oculta o botão
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.topo').fadeIn('slow');
        } else {
            $('.topo').fadeOut('slow');
        }
    });
    //Evento hover dos itens das habilidades 
    //Preenchimento da div nivel2 acontece pelo CSS
    $('.nivel').hide(); 
    $('.habilidade').hover(function(){
        $('.nivel, cinq, oit').show('slow'); 
    }); 

    $(window).scroll(function() {
        $('.nivel').hide(); 
    });
    

   

    
    


    
    
   
   
        
        
    
    
    
    


    

}); //Fim