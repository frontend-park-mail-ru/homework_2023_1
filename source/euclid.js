"use strict";

/**
 * Нахождение наибольшего общего делителя натуральных чисел.
 * @param  nums {number} - Массив натуральных чисел
 * @returns {null|number} - Результат вычисления (натуральное число, если входные параметры корректны, иначе null)
 */
const euclid = function(...nums) {
    if (nums.length === 0) {
        return null;
    }
    if (nums.some(number => !Number.isInteger(number) || number <= 0)) {
        return null;
    }
    return nums.reduce((pair_GCD, currentValue) => {
        let largest = Math.max(pair_GCD, currentValue);
        let lowest = Math.min(pair_GCD, currentValue);
        while (lowest !== 0) {
            const temp = lowest;
            lowest = largest % lowest;
            largest = temp;
        }
        return largest;
    });
}

