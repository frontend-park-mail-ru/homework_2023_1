'use strict';

const tree = (height) => {
    if (height === undefined || height < 3) {
        return null;
    }

    const space = ' ';
    const crown = '*';
    const trunk = '|';
    let tree = '';
    let max_width = (height - 3) * 2 + 2;

    const addLayer = (element, n) => {
        tree += space.repeat(max_width / 2 - n);
        tree += element.repeat(n * 2 + 1);
        tree += space.repeat(max_width / 2 - n);
        tree += '\n';
        return tree;
    }

    for (let i = 0; i < height - 1; i++) {
        addLayer(crown, i);
    }
    addLayer(trunk, 0);

    return tree;
}
