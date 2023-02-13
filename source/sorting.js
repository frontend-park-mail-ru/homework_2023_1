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
 * @returns {(Array.<Object>|TypeError)} - отсортированный массив либо сообщение об ошибке
 */

const sorting = (objects, properties) => {
    if (!objects?.length) {
        return [];
    }
    if (!properties?.length) {
        return objects;
    }

    if (!objects.every(o => Object.keys(o).length)) {
        return TypeError("Invalid data");
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
