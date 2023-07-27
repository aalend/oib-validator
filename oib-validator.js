const valid = document.querySelector('.valid');
const invalid = document.querySelector('.invalid');
const oibError = document.querySelector('.error');

export default function isOibValid(input) {
	const oib = input.toString();

	if (oib.match(/\d{11}/) === null || oib.match(/\d{11}/ > 11)) {
		valid.classList.remove('visible');
		invalid.classList.remove('visible');
		oibError.classList.add('visible');
		return false;
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

	if (check === Number(oib.slice(10))) {
		oibError.classList.remove('visible');
		invalid.classList.remove('visible');
		valid.classList.add('visible');
	} else {
		oibError.classList.remove('visible');
		valid.classList.remove('visible');
		invalid.classList.add('visible');
	}

	return check === parseInt(oib[10]);
}
