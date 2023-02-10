'use strict';

const SPACE = ' ';
const CROWN = '*';
const TRUNK = '|';

/**
 * Функция, которая добавляет слой к дереву.
 * @param {String} element - Элемент слоя.
 * @param {Integer} n - Номер слоя.
 * @param {Integer} width - Максимальная ширина дерева.
 * @returns {String} Слой дерева.
 */
const addLayer = (element, n, width) => {
    let layer = '';
    layer += SPACE.repeat(width / 2 - n);
    layer += element.repeat(n * 2 + 1);
    layer += SPACE.repeat(width / 2 - n);
    layer += '\n';
    return layer;
}

/**
 * Функция, которая рисует дерево.
 * @param {Integer} height - Высота дерева.
 * @returns {String} Дерево.
 */
const tree = (height) => {
    if (!Number.isInteger(+height) || height < 3) {
        return null;
    }

    let tree = '';
    const width = (height - 3) * 2 + 2;

    for (let i = 0; i < height - 1; i++) {
        tree += addLayer(CROWN, i, width);
    }
    tree += addLayer(TRUNK, 0, width);

    return tree;
}
