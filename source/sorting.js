'use strict';

/**
 * Sorting an array of objects
 * @param {Array} arr - Array of objects you want to sort
 * @param {Array} params - array of parameters as strings you will sort on
 * 
 * @return {Array} Array of objects that have been sorted
 * 
 * @author Ivan Stuaklov <sid21u699@student.bmstu.ru>
 */
function sorting (arr, params) {
    arr.sort((a, b) => {
        let comparator = 0;
        for (let p = 0; p < params.length; ++p) {
            if (a[params[p]] < b[params[p]]) {
                comparator = -1;
                return comparator;
            }
            if (a[params[p]] === b[params[p]]) {
                comparator = 0;
            }
            if (a[params[p]] > b[params[p]]) {
                comparator = 1;
                return comparator;
            }
        };
        return comparator;
    });
    return arr;
}
