export default function errorMessage(message, className) {
	const errorContainer = document.querySelector('.error-container');

	const msg = `
		<div class="${className}" role="alert">
			<span class="block sm:inline">${message}</span>
		</div>`;

	errorContainer.innerHTML = '';
	errorContainer.insertAdjacentHTML('afterbegin', msg);
}
