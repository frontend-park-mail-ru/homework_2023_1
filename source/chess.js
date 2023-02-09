'use strict';

/** The function returns an even checkerboard row of stars and spaces. */
const getEvenLine = numbers => "* ".repeat(numbers / 2) + "*".repeat(numbers % 2) + "\n";

/** The function returns an odd checkerboard row of stars and spaces. */
const getOddLine = numbers => " *".repeat(numbers / 2) + " ".repeat(numbers % 2) + "\n";

/** A function that returns a chessboard N*N of stars and spaces. */
const chess = (numbers) => {
    if ( !Number.isInteger(+numbers) || numbers < 2) {
        return null;
    }

    return (getEvenLine(numbers) + getOddLine(numbers)).repeat(numbers / 2) + getEvenLine(numbers).repeat(numbers % 2);
};
