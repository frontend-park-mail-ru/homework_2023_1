'use strict';

/**
 * Функция для добавления строки в объект с ключами отсортированными строками и значениеми - массивами соответвующих группе анаграмм строк
 * @param {Object} groups объект групп анаграмм
 * @param {string} newString строка для включения в масив групп анаграмм 
 * @returns {Object} объект групп анаграмм с включенной строкой
 */

const addAnagram = (groups, newString) => {
    const groupsCopy = Object.assign({}, groups); 
    const sortedNewString = newString.toLowerCase().split('').sort().join('');
    const foundGroup = Object.keys(groupsCopy).find(key => key === sortedNewString);
    if (foundGroup) {
        groupsCopy[sortedNewString].push(newString);
    }
    else {
        groupsCopy[sortedNewString] = [newString];
    }
    return groupsCopy;
}



/**
 * Функция для поиска анаграмм.
 * Поиск основан на сортировке и осуществляется соглавсно следующему правилу: 
 * 2 строки анаграммы, если при лексикографическом сравнении строк,
 * отсортированных по буквам, получается равенство
 * @param {Array.<string>} массив строк 
 * @returns {Array.<Array.<string>>} отсортированный и отфильтрованный массив групп анаграмм, каждая из которых также представляет собой массив
 */
const anagramSort = (strings) => {
    if (!Array.isArray(strings) || !strings.every((elem) => 
        typeof elem === 'string' || elem instanceof String
    )) {
        throw new TypeError('Expected Array of strings');
    }
    const groups = strings.reduce((acc, string) => {
            return addAnagram(acc, string);
        }, {})
    return Object.values(groups)
        .filter(group => group.length >= 2)
        .map(group => group.sort((a, b) => a.localeCompare(b)))
        .sort((a, b) => a[0].localeCompare(b[0]))
}
