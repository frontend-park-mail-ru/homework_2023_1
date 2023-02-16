'use strict';

/**
 * Checks if obj is a string
 * @param {any} obj
 * @returns {boolean}
 */
const isString = obj => obj instanceof String || typeof obj === 'string';

/**
 * Checks if obj is a finite number
 * @param {any} obj
 * @returns {boolean}
 */
const isFiniteNumber = obj => (obj instanceof Number || typeof obj === 'number') && isFinite(obj);

/**
 * Solves a valid mathematical expression with regard to passed argument
 * @param {string} expression consists of x, integers, basic operators and parantheses
 * @param {number} argument value of x in expression
 * @namespace solve
 */
const solve = (expression, argument) => {
    if (!isString(expression)) {
        throw Error('expression must be a string');
    }

    if (!isFiniteNumber(argument)) {
        throw Error('argument must be a finite number');
    }

    /**
     * An operator object
     * @param {number} priority priority of operator
     * @param {function(number, number)} func the callback invoked when operator is executed
     */
    const op = (priority, func) => ({priority: priority, exec: func});

    const ops = {
        "+": op(1, (a, b) => a + b),
        "-": op(1, (a, b) => a - b),
        "*": op(2, (a, b) => a * b),
        "^": op(3, (a, b) => Math.pow(a, b))
    };

    /**
     * Returns the top element of an array without popping it
     * @param {Array} stack 
     */
    const top = stack => stack[stack.length - 1];

    /**
     * Takes the top operator from the op_stack and applies it to two numbers from num_stack
     * @param {Array} op_stack 
     * @param {Array} num_stack 
     */
    const apply = (op_stack, num_stack) => {
        if (op_stack.length < 1 || num_stack.length < 2) {
            throw Error('invalid expession');
        }
        
        // arguments pulled from the stack are in the reverse order
        const second_argument = num_stack.pop();
        const first_argument = num_stack.pop();

        num_stack.push(ops[op_stack.pop()].exec(first_argument, second_argument));
    };

    const op_stack = [];
    const num_stack = [];

    let parentheses_balance = 0;

    [...expression].forEach(symbol => {
        if (symbol === ' ') {
            return;
        }

        const num = parseInt(symbol);

        if (num) {
            num_stack.push(num);
        } else if (symbol === 'x') {
            num_stack.push(argument);
        } else if (symbol in ops) {
            while (top(op_stack) in ops && ops[symbol].priority <= ops[top(op_stack)].priority) {
                apply(op_stack, num_stack);
            }
            op_stack.push(symbol);
        } else if (symbol === '(') {
            op_stack.push('(');
            parentheses_balance++;
        } else if (symbol === ')') {
            if (parentheses_balance === 0)
                throw Error('closing parentheses does not have a corresponing pair');

            while (top(op_stack) !== '(') {
                apply(op_stack, num_stack);
            }
            op_stack.pop();
            parentheses_balance--;
        } else {
            throw Error(`invalid symbol in expression: ${symbol}`);
        }
    });

    if (parentheses_balance !== 0)
        throw Error('parantheses not closed');

    while(op_stack.length !== 0) {
        apply(op_stack, num_stack);
    }

    return num_stack.pop();
}
