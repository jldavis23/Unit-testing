const reverse = require('./strings');
const uppercase = require('./strings');
const noVowels = require('./strings');

//REVERSE
test('Hello changes to olleH', () => {
    expect(reverse.reverse('Hello')).toStrictEqual('olleH');
});

test('Hi Bob changes to boB iH', () => {
    expect(reverse.reverse('Hi Bob')).toStrictEqual('boB iH');
});

//UPPERCASE
test('popcorn changes to POPCORN', () => {
    expect(uppercase.uppercase('popcorn')).toStrictEqual('POPCORN');
});

test('Hello there changes to HELLO THERE', () => {
    expect(uppercase.uppercase('Hello there')).toStrictEqual('HELLO THERE');
});

test('return type is string', () => {
    expect(typeof uppercase.uppercase('popcorn')).toStrictEqual('string');
});

//NO VOWELS
test('popcorn changes to ppcrn', () => {
    expect(noVowels.noVowels('popcorn')).toStrictEqual('ppcrn');
});

test('aeiou changes to an empty string', () => {
    expect(noVowels.noVowels('aeiou')).toStrictEqual('');
});

test('popcorn changes to ppcrn', () => {
    expect(typeof noVowels.noVowels('popcorn')).toStrictEqual('string');
});