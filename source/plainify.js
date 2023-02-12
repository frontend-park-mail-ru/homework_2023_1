'use strict';

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
    if (typeof(objectToSimplify) !== "object" || objectToSimplify === null) {
        throw Error("Not object or null");
    };

    const fieldsFromObject = Object.entries(objectToSimplify);

    return fieldsFromObject.reduce((simpleObj,
                                    [nameOfField, valueOfField]) => {
        if (
            valueOfField !== null &&
            typeof(valueOfField) === "object"
        ) {
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

