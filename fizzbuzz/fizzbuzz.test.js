//require the function

test('a multiple of 3 gives you fizz', () => {
    expect(fizzbuzz(3)).toStrictEqual([1, 2, 'fizz']);
});

test('a multiple of 5 gives you buzz', () => {
    expect(fizzbuzz(5)).toStrictEqual([1, 2, 'fizz', 4, 'buzz']);
});

test('multiples of 3 and 5 gives you fizzbuzz', () => {
    expect(fizzbuzz(15)).toStrictEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']);
});