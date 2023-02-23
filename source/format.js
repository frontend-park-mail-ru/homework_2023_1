"use strict";

const format = function(numbers, columnsNumber) {

	if (typeof columnsNumber !== "number" && !(columnsNumber instanceof Number)) {
		throw new TypeError("The parameter must be a number.");
	}

	if (columnsNumber < 1) {
		throw new TypeError("The number of columns must be greater than zero.");
	}

	const startColumnsWidth = new Array(columnsNumber).fill(0);

	const maxColumnsWidth = numbers.reduce(function(accumulator, currentValue, index) {

		if (typeof currentValue !== "number" && !(currentValue instanceof Number)) {
			throw new TypeError("The argument must be a number.");
		}

		let currentColumn = index % columnsNumber;
		if (String(currentValue).length > accumulator[currentColumn]) {
			accumulator[currentColumn] = String(currentValue).length;
		}
		return accumulator;
	}, startColumnsWidth);

	let resColumns = "";

	for (let i = 0; i < numbers.length; i++) {
		if (i !== 0 && i % columnsNumber === 0) {
			resColumns += "\n";
		} else if (i!== 0 && columnsNumber > 1) {
			resColumns += " "; 
		}
		resColumns += String(numbers[i]).padStart(maxColumnsWidth[i % columnsNumber]);
	}

	return resColumns;
}