'use strict';

const inverse = (numbers, stop = 0) => {
    let newNumbers = numbers.slice()

    if (stop >= 0) {
        for (let i = numbers.length - 1; i >= stop; i--) {
            newNumbers[i] = numbers[numbers.length - 1 - i +stop]
        }
    } else {
        for (let i = 0; i <= numbers.length + stop - 1; i++) {
            newNumbers[i] = numbers[numbers.length - 1 - i + stop]
        }
    }

    return newNumbers
};
