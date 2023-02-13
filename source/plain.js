'use strict';

/**
 * Функция plain принимает на вход массив массивов arr, который может иметь любую вложенность, и возвращает одномерный массив, содержащий объекты arr в исходном порядке.
 * @function
 * @param {Array} arr - Массив массивов
 *
 * @return {Array}
 *
 */

const plain = (arr) => {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected array');
	}

	const ans = [];

	while (arr.length) {
		const elem = arr.shift();

		if (Array.isArray(elem)) {
			arr.unshift(...elem);
		} else {
			ans.push(elem);
		}
	};

	return ans;
};
