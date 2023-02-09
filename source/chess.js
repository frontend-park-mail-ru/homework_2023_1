'use strict';

const PATTERN_1 = '* ';
const PATTERN_2 = ' *';
const BREAK = '\n';
/**
 * Creates a chess board with '*' and ' ' symbols.
 * @function
 * @param {number} dim - Dimension of the chess board.
 * @returns {string | null} A string representing a chess board
 * with '*', ' ' and '\n' symbols.
 */
const chess = dim => {
    if (!Number.isInteger(Number(dim))){
        throw new Error('Invalid argument: integer number expected.');
    }

    if (dim < 2) {
        return null;
    }

    let row1 = PATTERN_1.repeat(Math.floor(dim / 2));
    let row2 = PATTERN_2.repeat(Math.floor(dim / 2));

    const normalizeRow = row => (dim % 2 !== 0 ? row + row[0] : row) + BREAK;

    row1 = normalizeRow(row1);
    row2 = normalizeRow(row2);

    const  board = (row1 + row2).repeat(Math.floor(dim / 2));
    return dim % 2 !== 0 ? board + row1 : board;
}
