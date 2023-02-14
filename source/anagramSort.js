'use strict';

/**
 * Функция для добавления строки в массив групп анаграмм
 * @param {Array} groups массив групп анаграмм
 * @param {string} newString строка для включения в масив групп анаграмм 
 * @returns {Array} массив групп анаграмм с включенной строкой
 */

const addAnagram = (groups, newString) => {
    const groupsCopy = groups.slice()
    const foundGroup = groupsCopy.find(group => group[0].toLowerCase().split('').sort().toString() 
            === newString.toLowerCase().split('').sort().toString())
    if (foundGroup) {
        foundGroup.push(newString)
    }
    else {
        groupsCopy.push([newString])
    }
    return groupsCopy
}



/**
 * Функция для поиска анаграмм.
 * Поиск основан на сортировке и осуществляется соглавсно следующему правилу: 
 * 2 строки анаграммы, если при лексикографическом сравнении строк,
 * отсортированных по буквам, получается равенство
 * @param {Array} strings массив строк 
 * @returns {Array} отсортированный и отфильтрованный массив групп анаграмм, каждая из которых также представляет собой массив
 */
const anagramSort = (strings) => {
    if (!Array.isArray(strings) || (!strings.every((elem) => {
        return typeof elem === 'string'
    }))) {
        throw new TypeError('Expected Array of strings');
    }
    return strings.reduce((acc, string) => {
            return addAnagram(acc, string)
        }, [])
        .filter(group => group.length >= 2)
        .map(group => group.sort((a, b) => {
            return a.localeCompare(b)
        }))
        .sort((a, b) => {
            return a[0].localeCompare(b[0])
        })
}