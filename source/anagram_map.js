'use strict';

// функция сравнения двух объектов (одной вложенности)
function isEqual(obj1, obj2) {
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
    КРАТКОЕ ОПИСАНИЕ
    функция группировки на анаграммы (без фильтрации и сортировки)
    для каждой строки создается объект
    {
        string: "hello"
        dict: {
            "h" : 1
            "e" : 1
            "l" : 2
            "o" : 1
        }
    }
    объекты для первых встретившихся анаграмм помещаются в массив unique_dicts
    для следующих строк ищется парная анаграмма в этом массиве
        - находится - помещаем строку в массив результатов в соответсвующую группу
        - не находится - помещаем строку в массив результатов в одиночную группу и добавляем объект в unique_dicts
*/
function grouping(strings) {
    const unique_dicts = [];
    const result = [];
    strings.forEach(str => {
        const dict = {};
        [...str.toLowerCase()].forEach(symbol => {
            symbol in dict ? ++dict[symbol] : dict[symbol] = 1;
        });
        const found = unique_dicts.find(d => isEqual(d.dict, dict));
        if (found) {
            result.find(s => s[0] == found.string).push(str);
        } else {
            unique_dicts.push({
                "string": str, 
                "dict" : dict,
            });
            result.push([str]);
        } 
    });
    return result
}

function anagram_map(strings) {
    return grouping(strings)
        .filter(group => group.length >= 2)
        .map(group => group.sort((a, b) => {
            return a.toLowerCase() > b.toLowerCase() ? 1 : -1; 
        }))
        .sort((a, b) => {
            return a[0].toLowerCase() > b[0].toLowerCase() ? 1 : -1; 
        })
}
