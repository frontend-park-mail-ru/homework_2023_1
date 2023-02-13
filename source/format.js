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

	if (typeof columnsNumber !== 'number' && columnsNumber.constructor != Number) {
		throw new TypeError(
			`Wrong type of second argument.
			Expected "number", got "${typeof columnsNumber}"`
		);
	}

	if (columnsNumber < 1) {
		throw new TypeError(
			`Wrong value of second argument. 'columnsNumber' must be > 0`
		); 
	}

	const maxLengths = Array(columnsNumber).fill(0);


	// получаем максимальные длины по столбцам
	values.forEach((value, index) => {
		let columnIndex = index % columnsNumber;
		if (typeof value != "number" && value.constructor != Number) {
			throw new TypeError(
				`Wrong type of array values. Expected "Number", got "${typeof value}"`
			);
		}

		let newLength = getNumberLength(value);
		if (newLength > maxLengths[columnIndex]) {
			maxLengths[columnIndex] = newLength;
		}
	});		

	// формируем строку
	let output = values.reduce((previousValue, currentElement, index, arr) => {
		let columnIndex = index % columnsNumber;
		let newValue = previousValue + formatNumber(currentElement,
													 maxLengths[columnIndex])

		if (index == arr.length - 1) {
			return newValue;
		}

		if (columnIndex >= columnsNumber - 1) {
			newValue += '\n';
		} else {
			newValue += ' ';
		}

		return newValue;
	}, "");

	return output;

}

/**
 * @description Creates table cell out of input number (adds " ")
 * @param {Number} number - Input number 
 * @param {Number} length - Table cell length
 * @returns {String} Table cell 
 */
function formatNumber(number, length) {
	const stringedNumber = number.toString();

	const spacesAmount = length - stringedNumber.length;
	if (spacesAmount > 0) {
		return `${" ".repeat(spacesAmount)}${stringedNumber}`;	
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
