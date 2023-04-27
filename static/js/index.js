$(document).ready(function(){

    const URL_POST = $('#url_post').val()
    const CSRF_TOKEN = $('[name="csrfmiddlewaretoken"]').val()

    ModificarEquacao = function (arg) {

        tecla = $(arg).html().toString()

        const caracteresVisor = ['1','2','3','4','5','6','7','8','9','0',"(",")",".","÷","*","+","-","%"];

        if (caracteresVisor.includes(tecla)){

            equacao_anterior = $('.visor').html()
            nova_equacao = equacao_anterior + tecla

            console.log(nova_equacao)
    
            $('.visor').html(nova_equacao)
        }
        else if (tecla == "AC"){
            $('.visor').html('')
        }
        else if (tecla == "="){

            var formData = new FormData();
            formData.append('equacao', $('.visor').html());

            const options = {
                method: 'POST',
                headers: {
                  'X-CSRFToken': CSRF_TOKEN
                },
                body: formData
              };


            fetch(URL_POST, options)
            .then(function(response){return response.json()})
            .then(data => {
                
                $('.visor').html(data.resposta)
                
            })
        }


    }

    $('div.tecla').on('click', function() {

        ModificarEquacao($(this).find('p.tecla'));
    });



})