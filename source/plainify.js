'use strict';

function plainify(objectToSimplify) {
    let simpleObj = {}
    
    for (let key in objectToSimplify) {
        if (typeof(objectToSimplify[key]) == 'object') {
            let innerObject = plainify(objectToSimplify[key])
            
            for (let innerKey in innerObject) {
                simpleObj[key + '.' + innerKey] = innerObject[innerKey]
            }
        } else {
            simpleObj[key] = objectToSimplify[key]
        }
    }
    return simpleObj
} 
