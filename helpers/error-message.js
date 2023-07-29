export default function errorMessage(message, className) {
	const errorContainer = document.querySelector('.error-container');

	const msg = `
		<div class="${className}">
			<span class="block">${message}</span>
		</div>`;

	errorContainer.innerHTML = '';
	errorContainer.insertAdjacentHTML('afterbegin', msg);
}
