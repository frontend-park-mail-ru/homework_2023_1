'use strict'

/**
 * @description Returns input values 'values', splitted into 'columnsNumber' columns
 * columnsNumber > 0
 * @param {Array.<Number>} values - Array of integers
 * @param {Number} columnsNumber - Columns number
 * @returns {String} String format table of input values with 'columnsNumber' columns 
 */
function format(values, columnsNumber) {
	if (!Array.isArray(values)) {
		throw new TypeError(
			`Wrong type of first argument.
			Expected "Array<Number>", got "${typeof values}"`
		);
	}

	if (typeof columnsNumber !== 'number') {
		throw new TypeError(
			`Wrong type of second argument.
			Expected "number", got "${typeof columnsNumber}"`
		);
	}

	if (columnsNumber.length < 1) {
		throw new TypeError(
			`Wrong value of second argument. 'columnsNumber' must be > 0`
		); 
	}

	let maxLengths = Array(columnsNumber).fill(0);

	let columnIndex = 0;

	// получаем максимальные длины по столбцам
	values.forEach((value) => {
		if (typeof value != "number") {
			throw new TypeError(
				`Wrong type of array values.
				Expected "Number", got "${typeof value}"`
			);
		}

		let newLength = getNumberLength(value);
		if (newLength > maxLengths[columnIndex]) {
			maxLengths[columnIndex] = newLength;
		}

		columnIndex++;
		if (columnIndex >= columnsNumber) {
			columnIndex = 0;
		}
	});

	// формируем строку
	columnIndex = 0;
	let output = "";
	values.forEach((value, index, values) => {
		output += formatNumber(value, maxLengths[columnIndex]);

		if (index == values.length - 1) {
			return;
		}

		if (columnIndex >= columnsNumber - 1) {
			columnIndex = 0;
			output += '\n';
		} else {
			output += ' ';
			columnIndex++;
		}
	});

	return output;

}

/**
 * @description Creates table cell out of input number (adds " ")
 * @param {Number} number - Input number 
 * @param {Number} length - Table cell length
 * @returns {String} Table cell 
 */
function formatNumber(number, length) {
	let stringedNumber = number.toString();

	let spacesAmount = length - stringedNumber.length;
	if (length > stringedNumber.length) {
		stringedNumber = " ".repeat(spacesAmount) + stringedNumber;	
	}
	
	return stringedNumber;
}


/**
 * @description Returns number length
 * @param {Number} number - Input number 
 * @returns {Number} Number 'length'
 */
function getNumberLength(number) {
	let length = number < 0 ? 2 : 1;
	while (~~(number / 10) != 0) {
		number /= 10;
		length++;
	}

	return length;
}
