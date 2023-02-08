'use strict';

const inverse = (numbers, stop = 0) => {
    if (stop >= 0) {
        //part of original array + part of reversed array
        return numbers.slice(0, stop).concat(numbers.slice(stop).reverse())
    }
        //vise verse: part of reversed array + part of original
    return numbers.slice(0, stop).reverse().concat(numbers.slice(stop))
};