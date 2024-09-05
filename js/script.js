var btnMenu   =document.querySelector('.btn-menu');
var menu      =document.querySelector('.menu');
var itemMenu  =document.querySelector('.item');
var emailEnvio = document.querySelector('#enviarEmail');


//funcao para manipular o menu
function menuSite(){
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}

function openWhatsApp() {
    window.open("https://wa.me/5521996947424", "_blank");
}



emailEnvio.addEventListener('click', function (event) {
    event.preventDefault();

    // Coleta os dados do formulário
    var nome =document.querySelector('#nome').value;  
    var email = document.querySelector('#email').value;
    var assunto = document.querySelector('#assunto').value;
    var mensagem = document.querySelector('#mensagem').value;

    // Define os parâmetros para enviar o e-mail
    var params = {
       to_name: nome,
       from_name: email,
       reply_to: assunto,
       message: mensagem,
    };
    console.log(params);  
    
    location.href='#close';  /*executa o fechar la do html */
    
    // Envia o e-mail

    emailjs.send("service_8giesqe", "template_npodbl7", params)
       .then(function (response) {
          
          Swal.fire({
            title: 'Envio de Email !',
            text: 'O Email foi enviado com sucesso !!!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          document.querySelector('#nome').value='';  
          document.querySelector('#email').value='';
          document.querySelector('#assunto').value='';
          document.querySelector('#mensagem').value='';
             }, function (error) {
          console.error('Ocorreu um erro ao enviar o e-mail:', error);
          Swal.fire({
            title: 'Envio de Email !',
            text: 'Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.',
            icon: 'error',
            confirmButtonText: 'OK'
          });          
       });
});
//eventos

btnMenu.addEventListener('click',menuSite);
itemMenu.addEventListener('click',menuSite);
