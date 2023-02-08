/**
 * Creates a chess board with '*' and ' ' symbols.
 * @function
 * @param {number} dim - Dimension of the chess board.
 * @returns {string} A string representing a chess board
 * with '*', ' ' and '\n' symbols.
*/
const chess = dim => {
    if (!Number.isInteger(Number(dim))) return null;
    if (dim < 2) return null;
    const pattern1 = '* ';
    const pattern2 = ' *';
    let row1 = pattern1.repeat(Math.floor(dim/2));
    let row2 = pattern2.repeat(Math.floor(dim/2));
    const normalizeRow = row => (dim%2 !== 0 ? row + row[0] : row) + '\n';
    row1 = normalizeRow(row1);
    row2 = normalizeRow(row2);
    let board = (row1 + row2).repeat(Math.floor(dim/2));
    return dim%2 !== 0 ? board + row1 : board;
}