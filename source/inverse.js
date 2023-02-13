'use strict';
/**
 * Inverse array except for elements that are defined by param stop
 * @function inverse
 * @param {Array} numbers - array of anything
 * @param {number} stop - number that demonstrates which elements will stay on their positions
 * @returns {Array}
 *
 */
const inverse = (numbers, stop = 0) => {
    if (!Array.isArray(numbers)) {
        throw new Error("The first parameter is not array");
    }

    if (!Number.isInteger(stop)) {
        throw new Error("The second parameter is not integer");
    }

    const newNumbers = [...numbers];

    if (stop >= 0) {
        for (let i = numbers.length - 1; i >= stop; i--) {
            newNumbers[i] = numbers[numbers.length - 1 - i +stop];
        }
    } else {
        for (let i = 0; i <= numbers.length + stop - 1; i++) {
            newNumbers[i] = numbers[numbers.length - 1 - i + stop];
        }
    }

    return newNumbers;
};
