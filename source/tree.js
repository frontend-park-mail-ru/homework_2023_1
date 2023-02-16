'use strict';

/**
 * function creating ascii tree
 * @returns {String | null}
 * @example
 * print_symbol(1,'*') return
 *
 * '*'
 * @params count - count of symbols, symbol - symbol need to print
 *
 */
function* print_symbol(count, symbol) {
    for (let i = 0; i < count; ++i) {
        yield symbol;
    }
}
/**
 * function creating ascii tree line
 * @returns {String | null}
 * @example
 * row(3,2,'*') return
 *
 * ' *** \n'
 * @params height - tree height, cur_height - current line,
 * symbol - symbol need to print
 *
 */
function* row(height, cur_height, symbol) {
    /** spaces before tree. */
    yield* print_symbol(height - 1 - cur_height, ' ')
    /** tree by printing *. */
    yield* print_symbol(2 * cur_height - 1, symbol)
    /** spaces after tree. */
    yield* print_symbol(height - 1 - cur_height, ' ')

    yield "\n";
}
/**
 * function creating ascii tree
 * @returns {String | null}
 * @example
 * create_tree(3) return
 *
 * '  *  \n'
 * ' *** \n'
 * '*****\n'
 * '  |  \n'
 * @param height - height
 */
function* create_tree(height) {
    for (let i = 1; i < height; i++) yield* row(height, i, '*');

    yield* row(height, 1, '|');
}

/**
 * function checking argument and call function to create ascii tree
 * @returns {String | null}
 * @example
 * tree(3) return
 *
 * '  *  \n'
 * ' *** \n'
 * '*****\n'
 * '  |  \n'
 * @param n - height
 */
const tree = (n) => {
    const height = Number(n);
    if (n === null) {
        throw new TypeError('такой высоты не бываает');
    }

    else if (isNaN(height)) {
        throw new TypeError('такой высоты не бываает');
    }

    else if (!Number.isInteger(height)) {
        throw new TypeError('такой высоты не бываает');
    }

    else if (!isFinite(height)) {
        throw new TypeError('такой высоты не бываает');
    }

    else if (height < 3) {
        return null;
    }

    return [...create_tree(height)].join('');

}