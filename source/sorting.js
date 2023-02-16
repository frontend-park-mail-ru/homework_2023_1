'use strict';

/**
 * Sorting an array of objects
 * @param {Array.<Object.<string, *>>} arr - Array of objects you want to sort
 * @param {Array.<string>} params - array of parameters as strings you will sort on
 *
 * @return {Array.<Object.<string, *>>} Array of objects that have been sorted
 *
 * @author Ivan Stuaklov <sid21u699@student.bmstu.ru>
 */
const sorting = (arr, params) => {
	if (!Array.isArray(arr)) {
		throw new TypeError('Not an array');
	}

	arr.sort((a, b) => {
		for (let p of params) {
			if (typeof(a[p]) !== typeof(b[p])){
				throw new TypeError('Different types');
			}

			if (a[p] < b[p]) {
				return -1;
			}
			if (a[p] > b[p]) {
				return 1;
			}
		}
		return 0;
	});
	return arr;
}
