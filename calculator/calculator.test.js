//require function

//SUM
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 4 + 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9);
});

//SUBTRACT
test('subtract 3 - 2 to equal 1', () => {
    expect(subtract(3, 2)).toBe(1);
});

test('subtract 3 - 2 to equal 1', () => {
    expect(subtract(10.6, 6)).toBe(4.6);
});

//MULTIPLY
test('multiplies 5 * 2 to equal 10', () => {
    expect(multiply(5, 2)).toBe(10);
})

test('multiplies 6 * 6 to equal 36', () => {
    expect(multiply(6, 6)).toBe(36);
})

//DIVIDE
test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
})

test('divides 16 / 8 to equal 2', () => {
    expect(divide(16, 8)).toBe(2);
})