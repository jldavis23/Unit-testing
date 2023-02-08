const sum = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const squared = (a) => {
    return a * a;
};

const factorial = (a) => {
    let num = 1;
    for (let i = 1; i <= a; i++) {
        num = num * i
    }
    return num;
};

module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    squared,
    factorial
};