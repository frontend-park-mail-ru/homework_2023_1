'use strict';

/**
 * Избавление объекта от вложенных свойств
 * @param {object} objectToSimplify - объект для упрощения 
 * @returns {object} возращает объект без вложенных свойств или пустой при ошибке
 */
const plainify = (objectToSimplify) => {
    if (typeof(objectToSimplify) !== 'object' || objectToSimplify === null) {
        return {}
    }

    const simpleObj = {}
    const fieldsFromObject = Object.entries(objectToSimplify)    
    
    fieldsFromObject.forEach(fieldOfObject => {
        if (typeof(fieldOfObject[1]) === 'object' && fieldOfObject[1] !== null) {
            const innerObjectFields = Object.entries(plainify(fieldOfObject[1]))

            innerObjectFields.forEach(innerField => {
                simpleObj[fieldOfObject[0] + '.' + innerField[0]] = innerField[1]
            })
        } else {
            simpleObj[fieldOfObject[0]] = objectToSimplify[fieldOfObject[0]]
        }
    })
    
    return simpleObj
}
