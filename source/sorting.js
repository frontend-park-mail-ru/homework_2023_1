'use strict';

/**
 * Напишите функцию sorting, которая принимает на вход массив plain-объектов
 * и массив имён свойств, по которым необходимо отсортировать массив объектов,
 * и реализует устойчивую сортировку этого массива в порядке возрастания (строки сортируются лексикографически,
 * числа — в порядке возрастания)
 *
 * @author ZelenkoDaniil - https://github.com/Zela2520
 * @param {Array.<Object>} objects - массив plain-объектов
 * @param {Array.<String>} properties - массив имён свойств, по которым необходимо отсортировать массив объектов
 * @returns {(Array.<Object>|string)} - отсортированный массив либо сообщение об ошибке
 */

function isArrayConsistFromEmptyObjects(objects) {
    let emptyObjects = 0;
    objects.forEach((value) => {
        if(JSON.stringify(value) ===  JSON.stringify({})) {
            ++emptyObjects;
        }
    })

    return emptyObjects === objects.length;
}

const sorting = (objects, properties) => {
    if (!objects?.length) return [];
    if (!properties?.length) return objects;

    if (isArrayConsistFromEmptyObjects(objects)) {
        return new Error('Invalid data. Array consist only empty objects');
    }

    return objects.sort((a,b) => {
        for (let i = 0; i < properties.length; i++) {
            if (a[properties[i]] < b[properties[i]]) {
                return -1;
            }
            if (a[properties[i]] > b[properties[i]]) {
                return 1;
            }
        }
        return 0;
    });
};
