const solve = (expression, argument) => {

    const flip_arguments = f => (...args) => f(...args.reverse())

    const op = (priority, func) => {
        return {priority: priority, exec: flip_arguments(func)};
    };

    const ops = {
        "+": op(1, (a, b) => a + b),
        "-": op(1, (a, b) => a - b),
        "*": op(2, (a, b) => a * b),
        "^": op(3, (a, b) => a ** b)
    };

    const top = stack => stack[stack.length - 1];
    const apply = (op_stack, num_stack) => num_stack.push(ops[op_stack.pop()].exec(num_stack.pop(), num_stack.pop()));
    let op_stack = [];
    let num_stack = [];

    let parentheses_balance = 0;

    for (symbol of expression) {
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
        }
    }

    if (parentheses_balance !== 0)
        throw Error('parantheses not closed');

    while(op_stack.length !== 0) {
        apply(op_stack, num_stack);
    }

    return num_stack.pop();
}