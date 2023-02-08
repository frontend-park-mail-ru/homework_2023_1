'use strict';

function deleteSingleWord(groups) {
    return groups.filter(group => group.length != 1);
}

const anagram = words => {
    let result = {};
    words.sort();

    words.forEach(word => {
        let cleaned = word.split('').sort().join('');

        if (result[cleaned]) {
            result[cleaned].push(word);
        } else {
            result[cleaned] = [word]
        }
    });

    return deleteSingleWord(Object.values(result));
}