'use strict';

const getEvenLine = numbers => "* ".repeat(numbers / 2) + "*".repeat(numbers % 2) + "\n";

const getOddLine = numbers => " *".repeat(numbers / 2) + " ".repeat(numbers % 2) + "\n";

const chess = (numbers) => {
    if (!Number.isInteger(+numbers) || numbers < 2) return null;

    return (getEvenLine(numbers) + getOddLine(numbers)).repeat(numbers / 2) + getEvenLine(numbers).repeat(numbers % 2);
};

