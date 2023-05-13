function exibirPesq() {
    let pesq = document.querySelector('.pesq');
    pesq.style.display = 'block';
}

function ocultarPesq() {
    let pesq = document.querySelector('.pesq');
    pesq.style.display = 'none';
}
function filtrarItens() {
  var input = document.getElementById("filtro").value.toLowerCase().trim();
  var itens = document.getElementsByClassName("c");

  for (var i = 0; i < itens.length; i++) {
    var item = itens[i];
    var nomeElemento = item.querySelector(".b");
    var nome = nomeElemento.textContent.toLowerCase();
    var nomeDestacado = '';

    for (var j = 0; j < nome.length; j++) {
      var letra = nome[j];
      // foi adicionada a verificação input === '' para garantir que,
      // ao digitar um espaço em branco, todos os itens sejam exibidos novamente.
      if (input.includes(letra) || input === '') {
        nomeDestacado += '<strong>' + letra + '</strong>';
      } else {
        nomeDestacado += letra;
      }
    }

    nomeElemento.innerHTML = nomeDestacado;

    if (nome.includes(input) || input === '') {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}
//e tem que fazer quando mouse sair do efeito hover divs vao desaparecer tambem


window.onload = function() {
  // Event listener para o botão de pesquisa
  let btnPesq = document.querySelector('.btn-pesq');

  btnPesq.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    var input = document.getElementById('filtro').value.trim();

    var resultadosDiv = document.createElement('div');
    resultadosDiv.id = 'resultados';
    resultadosDiv.innerHTML = '<p>RESULTADOS DA PESQUISA PARA "' + input + '"</p>';

    var orderDiv = document.querySelector('.order');
    orderDiv.innerHTML = ''; // Limpa os elementos anteriores
    orderDiv.appendChild(resultadosDiv);

    var elementosA = document.getElementsByClassName('a');
    for (var i = 0; i < elementosA.length; i++) {
      var elementoA = elementosA[i];
      var nome = elementoA.innerHTML.toLowerCase();

      if (nome.includes(input)) {
        var novoResultado = document.createElement('p');
        novoResultado.textContent = nome;
        resultadosDiv.appendChild(novoResultado);
      }
    }

    window.location.href = './nossosProdutos.html';
  });
};









