"use strict";

/**
 * Нахождение наибольшего общего делителя натуральных чисел.
 * @param  nums {number} - Массив натуральных чисел
 * @returns {null|number} - Результат вычисления (натуральное число, если входные параметры корректны, иначе null)
 */
const euclid = (...nums) => {
    if (nums.length === 0 || nums.some(number => !Number.isInteger(number) || number <= 0)) {
        return null;
    }
    return nums.reduce((resultValue, currentValue) => {
        let largest = Math.max(resultValue, currentValue);
        let lowest = Math.min(resultValue, currentValue);
        while (lowest) {
            const temp = lowest;
            lowest = largest % lowest;
            largest = temp;
        }
        return largest;
    });
}

