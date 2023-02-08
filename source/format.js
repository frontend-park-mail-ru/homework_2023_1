'use strict'


function format(values, columnsNumber) {
	let maxLengths = Array(columnsNumber).fill(0);

	let columnIndex = 0;

	// находим максимальные "длины" чисел по столбцам
	for (let i = 0; i < values.length; i++) {
		let newLength = getNumberLength(values[i]);
		if (newLength > maxLengths[columnIndex]) {
			maxLengths[columnIndex] = newLength;
		}

		columnIndex++;
		if (columnIndex >= columnsNumber) {
			columnIndex = 0;
		}
	}

	// формируем строку
	columnIndex = 0;
	let output = "";
	for (let i = 0; i < values.length; i++) {
		output += formatNumber(values[i], maxLengths[columnIndex]);

		if (i == values.length - 1) {
			break;
		}

		if (columnIndex >= columnsNumber - 1) {
			columnIndex = 0;
			output += '\n';
		} else {
			output += ' ';
			columnIndex++;
		}
	}

	return output;

}

// функция приводит число к виду ячейки таблицы
function formatNumber(number, length) {
	let stringedNumber = number.toString();

	let spacesAmount = length - stringedNumber.length;
	if (length > stringedNumber.length) {
		stringedNumber = " ".repeat(spacesAmount) + stringedNumber;	
	}
	
	return stringedNumber;
}


// функция возращает длину числа
function getNumberLength(number) {
	let length = number < 0 ? 2 : 1;

	while (~~(number / 10) != 0) {
		number /= 10;
		length++;
	}

	return length;
}