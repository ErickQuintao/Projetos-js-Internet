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
  