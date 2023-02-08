'use strict';

// ОСНОВНАЯ ИДЕЯ
// 2 строки анаграммы, если при лексикографическом сравнении строк, 
// отсортированных по буквам, получается равенство   

function add_anagram(groups, new_string) {
    try {
        groups.find(group => [...group[0]].sort().toString() === [...new_string].sort().toString()).push(new_string)
    } catch(err) {
        groups.push([new_string])
    }
    return groups
}

function anagram_sort(strings) {
    strings = strings.map(string => string.toLowerCase())
    return strings.reduce((acc, string) => {
            return add_anagram(acc, string)
        }, [])
        .filter(group => group.length >= 2)
        .map(group => group.sort())
        .sort((a, b) => {
            return a > b ? 1 : -1; 
        })
}