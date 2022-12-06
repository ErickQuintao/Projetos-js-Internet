const botao = document.querySelector('#calcular');

function fraseImc (){
	const valorImc = calculadorImc();
	if(valorImc < 18,5){
		return 'Magro demais';
	} else if(valorImc > 18,5 && valorImc < 24,9){
		return 'Normal';
	} else if(valorImc > 25 && valorImc < 29,9){
		return 'SobrePeso';
	} else if(valorImc > 30 && valorImc < 34,9){
		return 'Obesidade 1';
	}else if(valorImc > 35 && valorImc < 39,9){
		return 'Obesidade 2';
	}else if(valorImc > 40){
		return 'Obesidade 3';
	}else {
		return 'ERRO!!!';
	}
}

function calculadorImc () {
	const altura = document.querySelector('#altura').value;
	const peso = document.querySelector('#peso').value;
 return peso / (altura * altura);
}

function mostraResultado  (){
const nome = document.querySelector('#nome').value;
const textArea = document.querySelector('#resultado').value;
const valorImc = calculadorImc();
const frasesImc = fraseImc();

textArea.innerText = `${nome} seu IMC e ${valorImc} e voce esta ${frasesImc}`;
}

botao.addEventListener('click',mostraResultado);