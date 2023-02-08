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

const TYPE_ERROR = 'invalid arguments';

const sorting = (objects, properties) => {
    if (Array.isArray(objects) && objects.length == 0) {
        return []
    }
    
    if (Array.isArray(properties) && properties.length == 0) {
        return objects
    }

    return objects?.sort((a,b) => {
        debugger
        for (let i = 0; i < properties.length; i++) {
            if (a[properties[i]] < b[properties[i]]) {
                return -1
            }
            if (a[properties[i]] > b[properties[i]]) {
                return 1
            }
        }
        return 0
    })


};

console.log(sorting([
    {prop1: 3, id: '1', name: "Daniil"},
    {prop1: 3, id: '2', name: null},
    {prop1: 1, id: '1', name: null},
    {prop1: 1, id: '2', name: null},
    {prop1: 4, id: '1', name: "Alexa"},
    {prop1: 4, id: '2', name: null},
    {prop1: 2, id: '1', name: "Roma"},
    {prop1: 2, id: '2', name: null}
], [ 'id', 'prop1', 'name' ]))
