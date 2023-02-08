const sum = require('./calculator');
const subtract = require('./calculator');
const multiply = require('./calculator');
const divide = require('./calculator');

//SUM
test('adds 1 + 2 to equal 3', () => {
    expect(sum.sum(1, 2)).toBe(3);
});

test('adds 4 + 5 to equal 9', () => {
    expect(sum.sum(4, 5)).toBe(9);
});

//SUBTRACT
test('subtract 3 - 2 to equal 1', () => {
    expect(subtract.subtract(3, 2)).toBe(1);
});

test('subtract 10.6 - 6 to equal 1', () => {
    expect(subtract.subtract(10.6, 6)).toBe(4.6);
});

//MULTIPLY
test('multiplies 5 * 2 to equal 10', () => {
    expect(multiply.multiply(5, 2)).toBe(10);
})

test('multiplies 6 * 6 to equal 36', () => {
    expect(multiply.multiply(6, 6)).toBe(36);
})

//DIVIDE
test('divides 10 / 2 to equal 5', () => {
    expect(divide.divide(10, 2)).toBe(5);
})

test('divides 16 / 8 to equal 2', () => {
    expect(divide.divide(16, 8)).toBe(2);
})