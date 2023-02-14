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
        for (let p of params) {
            if (a[p] < b[p]) {
                return -1;
            }
            if (a[p] > b[p]) {
                return 1;
            }
        };
        return 0;
    });
    return arr;
}
