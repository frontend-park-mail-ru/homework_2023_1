'use strict';

// Напишите функцию inverse, которая меняет порядок элементов в массике на противоположный.
// Если в функцию вторым аргументом передаётся число — то переставляются все элементы массива
// кроме нескольких первых (количество зависит от числа). Если число отрицательное — то на
// месте остаются элементы в конце массива


const inverse = (given_array, position = 0) => {
    if ((!Array.isArray(given_array)) || (!Number.isInteger(position))) {
        throw new Error("wrong parameters!")
    }

    const temp_given_array = [...given_array]

    if (position < 0) {
        for (let i = given_array.length + position - 1; i >= 0; i--) {
            temp_given_array[i] = given_array[given_array.length - 1 - i + position]


        }
    } else  if (position >= 0) {
        for (let i = given_array.length - 1; i >= position; i--) {
            temp_given_array[i] = given_array[given_array.length - 1 - i + position]
        }
    }

    return temp_given_array
};





