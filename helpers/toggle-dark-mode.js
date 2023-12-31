import { iconMoon, iconSun } from '../icons';

export default function toggleMode() {
	const htmlElement = document.querySelector('html');
	const toggleModeButton = document.querySelector('.toggle-mode');

	if (!localStorage.getItem('toggle-mode')) {
		localStorage.setItem('toggle-mode', 'dark');
		htmlElement.classList.add('dark');
		toggleModeButton.innerHTML = '';
		toggleModeButton.style.backgroundColor = 'white';
		toggleModeButton.insertAdjacentHTML('afterbegin', iconSun);
	} else {
		localStorage.removeItem('toggle-mode');
		htmlElement.classList.remove('dark');
		toggleModeButton.innerHTML = '';
		toggleModeButton.style.backgroundColor = 'var(--gray-10)';
		toggleModeButton.insertAdjacentHTML('afterbegin', iconMoon);
	}
}
