'use strict';

const sorting = function (arr, params) {
    for (let curParam = 0; curParam < params.length; ++curParam) {
        arr.sort((a, b) => {
            let wasCoincident = true;
            for (let lastParam = 0; lastParam < curParam; ++lastParam){ // проверяем, равны ли значения по всем предыдущим параметрам
                if (a[params[lastParam]] != b[params[lastParam]]) {     // (были ли совпадения)
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
