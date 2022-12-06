const first = document.getElementById('first');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
let one = 0;

function addNewNumber(){
    one += 1
}

four.addEventListener('click',addNewNumber)


