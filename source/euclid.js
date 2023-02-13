"use strict";

/**
 * Нахождение наибольшего общего делителя натуральных чисел.
 * @param  nums - Массив натуральных чисел
 * @returns {null|number} - Результат вычисления (натуральное число, если входные параметры корректны, иначе null)
 */
function euclid(...nums) {
    //проверка натуральных чисел
    if (nums.some(number => !Number.isInteger(number) || number <= 0)){
        return null;
    }
    //проверка единственного аргумента
    if (nums.length === 1) {
        return nums.at(0);
    }
    /**
     * Вычисление наибольшего общего делителя для двух натуральных чисел
     * @param first - первое натуральное число
     * @param second - второе натуральное число
     * @returns {number} - результат вычисления
     */
    const CountGCD = function(first, second){
        let largest = Math.max(first, second);
        let lowest = Math.min(first, second);
        let temp;
        while(lowest !== 0){
            temp = lowest;
            lowest = largest % lowest;
            largest = temp;
        }
        return largest;
    };
    return nums.reduce((pair_GCD, currentValue) => CountGCD(pair_GCD, currentValue));
}

