'use strict';

const SPACE = ' ';
const CROWN = '*';
const TRUNK = '|';

/**
 * Функция, которая рисует дерево.
 * @param {Number} height - Высота дерева.
 * @returns {String} Дерево.
 */
const tree = (height) => {
    if (!Number.isInteger(+height) || height < 3) {
        return null;
    }

    let tree = '';
    const width = (height - 3) * 2 + 2;

    tree += Array.from(
        { length: height - 1 },
        (_, i) => {
            let layer = '';
            layer += SPACE.repeat(width / 2 - i);
            layer += CROWN.repeat(i * 2 + 1);
            layer += SPACE.repeat(width / 2 - i) + '\n';
            return layer;
        }
    ).join('');
    
    tree += SPACE.repeat(width / 2);
    tree += TRUNK;
    tree += SPACE.repeat(width / 2) + '\n';

    return tree;
}
