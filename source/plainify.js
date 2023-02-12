'use strict';

/**
 * @param {any} variableToCheck - переменная, над которой производится проверка
 * @returns {bool} возращает true, если не объект, и false, если объект
 * @example
 * checkIfNotObject({}) // вернёт нам true
 * checkIfNotObject(new String('aaa')) // вернёт нам false
 */
const checkIfNotObject = (variableToCheck) => {
    return variableToCheck === null || 
    Object.getPrototypeOf(variableToCheck) !== Object.getPrototypeOf({})
}

/**
 * Избавление объекта от вложенных свойств
 * @param {object} objectToSimplify - объект для упрощения 
 * @returns {object} возращает объект без вложенных свойств или пустой при ошибке
 * @example
 * //create object with Nesting structure
 * const ourObjectWithNesting = {
 *     nestFirstLayer: {
 *         nestSecondLayer: {
 *             valueInSecondLayer: 3
 *         }
 *         valueInFirstLayer: 2
 *     }
 *     valueInObject: 1
 * }
 * 
 * const simpleObject = plainify(ourObjectWithNesting); //simplify object
 * //structure of simple object
 * //'nestFirstLayer.nestSecondLayer.valueInSecondLayer': 3;
 * //'nestFirstLayer.valueInFirstLayer': 2;
 * //'valueInObject': 1
 * 
 */
const plainify = (objectToSimplify) => {
    if (checkIfNotObject(objectToSimplify)) {
        throw new TypeError('Not object or null', 'planify.js', 31)
    };
    const fieldsFromObject = Object.entries(objectToSimplify);

    return fieldsFromObject.reduce((simpleObj,
                                    [nameOfField, valueOfField]) => {
        
        if (!checkIfNotObject(valueOfField)) {
            const innerObjectFields =
                Object.entries(plainify(valueOfField));

            innerObjectFields.forEach( ([innerFieldName, innerFieldValue]) => {
                simpleObj[`${nameOfField}.${innerFieldName}`] =
                    innerFieldValue;
            });
        } else {
            simpleObj[nameOfField] = valueOfField;
        };

        return simpleObj;
    }, {});
}

