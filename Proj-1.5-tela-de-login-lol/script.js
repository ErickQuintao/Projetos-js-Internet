const inputs = document.querySelectorAll('.input');
const button = doucument.querySeletor('.login__button');

const handleFocus = ({ target }) => {
	const span = target.previousElementSibling;
	span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
	if(target.value === ''){
		const span = target.previousElementSibling;
		span.classList.remove('span-active');
	}

}
const handleChange = () => {
	const [username, password] = inputs;

	if(username.value && password.value.length > 7){
		button.removeAttribute('disabled');

	} else{
		button.setAttribute('disabled', '');
	}
}
inputs.forEach((input) => inputs.addEventListener('focus', handleFocus)); 
inputs.forEach((input) => inputs.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => inputs.addEventListener('input', handleChange));