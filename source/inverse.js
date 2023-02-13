'use strict';

// Напишите функцию inverse, которая меняет порядок элементов в массике на противоположный.
// Если в функцию вторым аргументом передаётся число — то переставляются все элементы массива
// кроме нескольких первых (количество зависит от числа). Если число отрицательное — то на
// месте остаются элементы в конце массива



const inverse = (given_array, position = 0) => {
    if (!Array.isArray(given_array)) {
        throw new Error("First parameter is not an array!")
    }

    if (!Number.isInteger(position)) {
        throw new Error("Second parameter is not integer type!")
    }

    let temp_given_array = [...given_array]

    if (position < 0) {
        temp_given_array = given_array.slice(0, position).reverse().concat(given_array.slice(position));

    } else  if (position >= 0) {
        temp_given_array = given_array.slice(0, position).concat(given_array.slice(position).reverse());
    }
    return temp_given_array
};
