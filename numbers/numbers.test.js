const addNumbers = require('./numbers');

test('[1, 2, 3] should add to equal 6', () => {
    expect(addNumbers([1, 2, 3])).toBe(6);
});

test('[-1, 0, 100] should add to equal 99', () => {
    expect(addNumbers([-1, 0, 100])).toBe(99);
});

test('return value should be a number', () => {
    expect(typeof addNumbers([-1, 0, 100])).toStrictEqual('number');
});