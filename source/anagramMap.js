'use strict';

/**
 * Функция сравнения на равенство двух объектов. Сравнение ограничевается первой вложенностью.
 * @param {Object} obj1 первый объект  
 * @param {Object} obj2 первый объект
 * @returns {Boolean} истина или ложь в зависимости от того, совпадают ли состав и значения полей объектов
 */
const isEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    return keys1.every(key => {
        return obj1[key] === obj2[key];
    })
}

/*
    Описание алгоритма.
    Для каждой строки создается объект:
        {
            string: "hello"
            dict: {
                "h" : 1
                "e" : 1
                "l" : 2
                "o" : 1
            }
        }
    Объекты для первых встретившихся анаграмм помещаются в массив unique_dicts, 
    для следующих строк ищется парная анаграмма в этом массиве. Возможны следующие варианты:
        1. если находится, помещаем строку в массив результатов в соответствующую группу
        2. если не находится, помещаем строку в массив результатов в одиночную группу и добавляем объект в unique_dicts
*/

/**
 * Функция для поиска анаграмм 
 * @param {Array} strings массив строк 
 * @returns {Array} массив групп анаграмм, каждая из которых также представляет собой массив
 */

const grouping = (strings) => {
    const unique_dicts = [];
    const result = [];
    strings.forEach(str => {
        const dict = [...str.toLowerCase()].reduce((acc, symbol) => {
            acc[symbol] = ++acc[symbol] || 1
            return acc
        }, {});
        const found = unique_dicts.find(d => isEqual(d.dict, dict));
        if (found) {
            result.find(s => s[0] === found.string).push(str);
        } else {
            unique_dicts.push({
                'string': str, 
                'dict' : dict,
            });
            result.push([str]);
        } 
    });
    return result
}

/**
 * Функция для поиска анаграмм.
 * Поиск осуществляется с использованием словарей лексем
 * @param {Array} strings массив строк 
 * @returns {Array} отсортированный и отфильтрованный массив групп анаграмм, каждая из которых также представляет собой массив
 */
const anagramMap = (strings) => {
    if (!Array.isArray(strings) || (!strings.every((elem) => {
        return typeof elem === 'string'
    }))) {
        throw new TypeError('Expected Array of strings');
    }
    return grouping(strings)
        .filter(group => group.length >= 2)
        .map(group => group.sort((a, b) => {
            return a.localeCompare(b)
        }))
        .sort((a, b) => {
            return a[0].localeCompare(b[0])
        })
}