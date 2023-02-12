'use strict';

/**
 * Функция для добавления строки в массив групп анаграмм
 * @param {Array} groups массив групп анаграмм
 * @param {string} new_string строка для включения в масив групп анаграмм 
 * @returns {Array} массив групп анаграмм с включенной строкой
 */
const add_anagram = (groups, new_string) => {
    try {
        groups.find(group => 
            [...group[0].toLowerCase()].sort().toString() 
                === [...new_string.toLowerCase()].sort().toString())
            .push(new_string)
    } catch(err) {
        groups.push([new_string])
    }
    return groups
}

/**
 * Функция для поиска анаграмм.
 * Поиск основан на сортировке и осуществляется соглавсно следующему правилу: 
 * 2 строки анаграммы, если при лексикографическом сравнении строк,
 * отсортированных по буквам, получается равенство
 * @param {Array} strings массив строк 
 * @returns {Array} отсортированный и отфильтрованный массив групп анаграмм, каждая из которых также представляет собой массив
 */
const anagram_sort = (strings) => {
    return strings.reduce((acc, string) => {
            return add_anagram(acc, string)
        }, [])
        .filter(group => group.length >= 2)
        .map(group => group.sort((a, b) => {
            return a.toLowerCase() > b.toLowerCase() ? 1 : -1; 
        }))
        .sort((a, b) => {
            return a[0].toLowerCase() > b[0].toLowerCase() ? 1 : -1; 
        })
}

