export default function errorMessage(message, className) {
	const errorContainer = document.querySelector('.error-container');

	const errorMessage = `<p class='${className}'>${message}</p>`;

	errorContainer.innerHTML = '';
	errorContainer.insertAdjacentHTML('afterbegin', errorMessage);
}
