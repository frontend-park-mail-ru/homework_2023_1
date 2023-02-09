'use strict';

function  plainify(object) {
    const obj_plain = {};

    function iterate(path, obj) {
        for (const key in obj) {
            if (typeof obj[key] === 'object') {
                iterate(path + key + '.', obj[key]);
            } else {
                obj_plain[path + key] = obj[key];
            }
        }
    };

    iterate('', object);

    return obj_plain;
}