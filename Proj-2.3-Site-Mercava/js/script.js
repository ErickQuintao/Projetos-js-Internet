// index.html

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);    
}
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// faleConosco.html
function validarFormulario() {
  var nomeInput = document.querySelector('.ipt-nome');
  var emailInput = document.querySelector('.ipt-email');
  var mensagemErro = document.querySelector('#result');

  var nome = nomeInput.value;
  var email = emailInput.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome === "") {
    mensagemErro.innerText = "POR FAVOR, PREENCHA O CAMPO NOME!!";
    nomeInput.focus();
    return;
  }

  if (email === "") {
    mensagemErro.innerText = "POR FAVOR, PREENCHA O CAMPO EMAIL!!";
    emailInput.focus();
    return;
  }

  if (!emailRegex.test(email)) {
    mensagemErro.innerText = "EMAIL INVÁLIDO!!";
    emailInput.focus();
    return;
  }

  // Todos os campos são válidos, enviar o formulário
  mensagemErro.innerText = "ENVIADA COM SUCESSO!!";
  // Aqui você pode adicionar a lógica para enviar o formulário ou fazer outras ações necessárias
}







