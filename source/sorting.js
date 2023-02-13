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
 * @throws {<String>} Will throw an error if array consists of empty objects.
 */

const sorting = (objects, properties) => {
    if (!objects?.length) return [];
    if (!properties?.length) return objects;

    if (!objects.every(o => Object.keys(o).length)) {
        return new Error('Invalid data. Array consists of empty objects');
    }
    
    return structuredClone(objects).sort((a,b) => {
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
