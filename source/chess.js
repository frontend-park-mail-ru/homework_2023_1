'use strict';

const chess = function (numbers) {
    if (!Number(numbers) | numbers < 2 | numbers % 1 > 0) return null;

    let evenLines = "* ".repeat(numbers / 2) + "*".repeat(numbers % 2) + "\n";
    let oddLines = " *".repeat(numbers / 2) + " ".repeat(numbers % 2) + "\n";

    return (evenLines + oddLines).repeat(numbers / 2) + evenLines.repeat(numbers % 2);
};
