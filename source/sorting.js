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
    params.forEach(element =>
        arr.sort((a, b) => {
            let wasCoincident = true;
            for (let lastParam = 0; lastParam < element; ++lastParam){ // проверяем, равны ли значения по всем предыдущим параметрам
                if (a[params[lastParam]] !== b[params[lastParam]]) {     
                    wasCoincident = false;
                }
            }
            if (wasCoincident) {
                if (a[params[curParam]] > b[params[curParam]]) {
                    return 1;
                }
                if (a[params[curParam]] === b[params[curParam]]) {
                    return 0;
                }
                if (a[params[curParam]] < b[params[curParam]]) {
                    return -1;
                }
            }
        })
    );   
    return arr;
}
