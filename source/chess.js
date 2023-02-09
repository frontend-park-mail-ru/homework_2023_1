'use strict';

const chess = function (n) {
    if (n <= 1) {
    	return null;
    }

    let cur_color = '*';
    let result = "";
    let is_even = n % 2;             
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
	        result += cur_color;
	        cur_color = cur_color === '*' ? ' ' : '*';
	    }
        if (!is_even) {
            cur_color = cur_color === '*' ? ' ' : '*';
        }
        result += '\n';
    }
    return result;
};
