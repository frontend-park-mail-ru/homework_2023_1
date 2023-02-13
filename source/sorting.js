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
    return objects.reduce((sum, curObj) => {
        for (let _ in curObj) {
            return 0;
        }
        return sum + 1;
    }, 0) === objects.length;
}


const sorting = (objects, properties) => {
    if (!objects?.length) return [];
    if (!properties?.length) return objects;

    if (isArrayConsistFromEmptyObjects(objects)) {
        return new Error('Invalid data. Array consists only empty objects');
    }

    return objects.sort((a,b) => {
        for (const key of properties) {
            if (a[key] < b[key]) {
                return -1;
            }
            if (a[key] > b[key]) {
                return 1;
            }
        }
        return 0;
    });
};
