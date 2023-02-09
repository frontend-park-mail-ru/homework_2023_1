'use strict';

// ОСНОВНАЯ ИДЕЯ
// 2 строки анаграммы, если при лексикографическом сравнении строк, 
// отсортированных по буквам, получается равенство   

function add_anagram(groups, new_string) {
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

function anagram_sort(strings) {
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

