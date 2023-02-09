'use strict';

// Напишите функцию `inverse`, которая меняет порядок элементов в массике на противоположный.
// Если в функцию вторым аргументом передаётся число &mdash; то переставляются все элементы массива кроме нескольких первых (количество зависит от числа).
// Если число отрицательное &mdash; то на месте остаются элементы в конце массива

const inverse = (array, number) => {
    if (number > 0) {
        return array.slice(0, number).concat(array.slice(number).reverse());
    } else if (number < 0) {
        return array.slice(0, number).reverse().concat(array.slice(number));
    }
    return array.reverse();
}