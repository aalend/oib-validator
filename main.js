import toggleMode from './helpers/toggle-dark-mode';
import isOibValid from './oib-validator';

const oibInput = document.querySelector('input');
const checkOib = document.querySelector('form');
const toggleModeButton = document.querySelector('.toggle-mode');
const htmlElement = document.querySelector('html');

const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="var(--gray-10)" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--gray-10)" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
`;

const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="var(--gray-10)" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--gray-10)" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>
`;

// Add dark mode if local storage has `dark` value
if (!htmlElement.classList.contains('dark') && localStorage.getItem('toggle-mode')) {
	htmlElement.classList.add('dark');
	toggleModeButton.innerHTML = '';
	toggleModeButton.insertAdjacentHTML('afterbegin', sunIcon);
}

if (localStorage.getItem('toggle-mode') === null) {
	toggleModeButton.innerHTML = '';
	toggleModeButton.insertAdjacentHTML('afterbegin', moonIcon);
}

toggleModeButton.addEventListener('click', () => toggleMode());

checkOib.addEventListener('submit', e => {
	e.preventDefault();

	isOibValid(oibInput);
});
