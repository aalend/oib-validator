import errorMessage from './helpers/error-message';

export default function isOibValid(input) {
	const oib = input.value.toString();

	// Check if input is empty
	if (!oib) {
		errorMessage('Upišite OIB', 'error');
		input.focus();

		return;
	}

	// Check if `oib` isNaN.
	if (isNaN(oib)) {
		errorMessage('OIB sadrži isključivo brojeve!', 'error');
		return;
	}

	if (oib.length > 11 || oib.length < 11) {
		errorMessage('OIB nije ispravan!', 'error');
		input.focus();

		return;
	}

	let calculated = 10;
	for (const digit of oib.substring(0, 10)) {
		calculated += parseInt(digit);

		calculated %= 10;
		if (calculated === 0) {
			calculated = 10;
		}

		calculated *= 2;
		calculated %= 11;
	}

	let check = 11 - calculated;
	if (check === 10) {
		check = 0;
	}

	if (check === +oib.slice(10)) {
		errorMessage('OIB je ispravan!', 'valid');
		input.focus();
	} else {
		errorMessage('OIB nije ispravan!', 'error');
		input.focus();
	}

	return check === parseInt(oib[10]);
}
