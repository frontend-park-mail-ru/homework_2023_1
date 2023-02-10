'use strict';

const NEWLINE = '\n';
const STAR = '*';
const SPACE = ' ';
const EVEN_LINE_PART = STAR + SPACE;
const ODD_LINE_PART = SPACE + STAR;

/**
 * The function returns an even checkerboard row of stars and spaces.
 * @param {int} numbers - size of line.
 * @returns {string} even row of chessboard of stars and spaces.
 */
const getEvenLine = (numbers) => EVEN_LINE_PART.repeat(numbers / 2) + STAR.repeat(numbers % 2) + NEWLINE;

/**
 * The function returns an odd checkerboard row of stars and spaces.
 * @param {int} numbers - size of line.
 * @returns {string} odd row of chessboard of stars and spaces.
 */
const getOddLine = (numbers) => ODD_LINE_PART.repeat(numbers / 2) + SPACE.repeat(numbers % 2) + NEWLINE;

/**
 * A function that returns a chessboard N*N of stars and spaces.
 * @param {int} numbers - size of chessboard.
 * @returns {string | null} chessboard of stars and spaces.
 */
const chess = (numbers) => {
    if (!Number.isInteger(+numbers) || numbers < 2) {
        return null;
    }

    return (getEvenLine(numbers) + getOddLine(numbers)).repeat(numbers / 2) + getEvenLine(numbers).repeat(numbers % 2);
};
