
/**
 * Inverse array except the elements, which are divided by param position
 * @function inverse
 * @param {Array} given_array - array of anything
 * @param {number} position - position where elements won't be inverted
 * @returns {Array}
 *
 * @author Chichikin Timofey <tchichikin@mail.ru>
 */

const inverse = (given_array, position = 0) => { // можно создать стрелочно
    if (!Array.isArray(given_array)) {
        throw new TypeError('First parameter is not an array!')
    }

    if (!Number.isInteger(position)) {
        throw new TypeError('Second parameter is not integer type!')
    }

    let temp_given_array = [...given_array]

    if (position < 0) {
        temp_given_array = given_array.slice(0, position).reverse().concat(given_array.slice(position));

    } else  if (position >= 0) {
        temp_given_array = given_array.slice(0, position).concat(given_array.slice(position).reverse());
    }
    return temp_given_array
};
