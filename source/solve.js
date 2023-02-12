/**
 * Solves a valid mathematical expression with regard to passed argument
 * @param {string} expression consists of x, integers, basic operators and parantheses
 * @param {number} argument value of x in expression
 * @namespace solve
 */
const solve = (expression, argument) => {
    "use strict"

    /**
     * Reverses the sequence of function arguments
     * @type {function(...any): function(...any)}
     * @param {function(...any)} f
     */ 
    const flip_arguments = f => (...args) => f(...args.reverse())

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
     * As we pull numbers from the stack, they are in the reverse order; hence, flip_arguments is used
     * @param {Array} op_stack 
     * @param {Array} num_stack 
     */
    const apply = (op_stack, num_stack) => {
        if (op_stack.length < 1 || num_stack.length < 2)
            throw Error('invalid expession');
        
        num_stack.push(flip_arguments(ops[op_stack.pop()].exec)(num_stack.pop(), num_stack.pop()))
    };

    let op_stack = [];
    let num_stack = [];

    let parentheses_balance = 0;

    for (const symbol of expression) {
        if (symbol === ' ')
            continue;

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
    }

    if (parentheses_balance !== 0)
        throw Error('parantheses not closed');

    while(op_stack.length !== 0) {
        apply(op_stack, num_stack);
    }

    return num_stack.pop();
}
