'use strict';

/**
 * Sorting an array
 * @sorting
 * @param {Array} arr - Array you want to sort
 * @param {Array} params - array of parameters you will sort on
 * 
 * @return {Array} Array that have been sorted
 * 
 * @author Ivan Stuaklov <sid21u699@student.bmstu.ru>
 */
const sorting = function (arr, params) {
    for (let curParam = 0; curParam < params.length; ++curParam) {
        arr.sort((a, b) => {
            let wasCoincident = true;
            for (let lastParam = 0; lastParam < curParam; ++lastParam){ // проверяем, равны ли значения по всем предыдущим параметрам
                if (a[params[lastParam]] != b[params[lastParam]]) {     
                    wasCoincident = false;
                }
            }
            if (wasCoincident) {
                if (a[params[curParam]] > b[params[curParam]]) {
                    return 1;
                }
                if (a[params[curParam]] == b[params[curParam]]) {
                    return 0;
                }
                if (a[params[curParam]] < b[params[curParam]]) {
                    return -1;
                }
            }
        });
    }   
    return arr;
}
