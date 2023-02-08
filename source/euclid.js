'use strict';

const gcd = function(a, b) {
    while (a && b) {
        if (a > b) {
            a %= b;
        }
        else {
            b %= a;
        }
    }
    return a + b;
}

const euclid = function() {
    if (arguments.length === 0){
        return undefined;
    }
    let res = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        res = gcd(res, arguments[i]);
    }
    return res;
};
