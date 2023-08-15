import toggleMode from './helpers/toggle-dark-mode';
import { iconMoon, iconSun } from './icons';
import isOibValid from './oib-validator';

const oibInput = document.querySelector('input');
const checkOib = document.querySelector('form');
const toggleModeButton = document.querySelector('.toggle-mode');
const htmlElement = document.querySelector('html');

// Add dark mode if local storage has `dark` value
if (!htmlElement.classList.contains('dark') && localStorage.getItem('toggle-mode')) {
	htmlElement.classList.add('dark');
	toggleModeButton.innerHTML = '';
	toggleModeButton.insertAdjacentHTML('afterbegin', iconSun);
}

if (localStorage.getItem('toggle-mode') === null) {
	toggleModeButton.innerHTML = '';
	toggleModeButton.insertAdjacentHTML('afterbegin', iconMoon);
}

toggleModeButton.addEventListener('click', () => toggleMode());

checkOib.addEventListener('submit', e => {
	e.preventDefault();

	isOibValid(oibInput);
});
