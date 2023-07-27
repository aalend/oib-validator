import isOibValid from './oib-validator';

const oibInput = document.querySelector('input');
const checkOib = document.querySelector('form');

checkOib.addEventListener('submit', e => {
	e.preventDefault();

	isOibValid(oibInput);
});
