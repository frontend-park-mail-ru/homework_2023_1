'use strict';

const EVEN_LINE_PART = '* ';
const ODD_LINE_PART = ' *';
const STAR = '*';
const SPACE = ' ';

/** The function returns an even checkerboard row of stars and spaces. */
const getEvenLine = numbers => EVEN_LINE_PART.repeat(numbers / 2) + STAR.repeat(numbers % 2) + "\n";

/** The function returns an odd checkerboard row of stars and spaces. */
const getOddLine = numbers => ODD_LINE_PART.repeat(numbers / 2) + SPACE.repeat(numbers % 2) + "\n";

/** A function that returns a chessboard N*N of stars and spaces. */
const chess = (numbers) => {
    if ( !Number.isInteger(+numbers) || numbers < 2) {
        return null;
    }

    return (getEvenLine(numbers) + getOddLine(numbers)).repeat(numbers / 2) + getEvenLine(numbers).repeat(numbers % 2);
};

