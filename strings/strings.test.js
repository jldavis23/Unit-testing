//require

//REVERSE
test('Hello changes to olleH', () => {
    expect(reverse.reverse('Hello')).toStrictEqual('olleH');
});

test('Hi Bob changes to boB iH', () => {
    expect(reverse.reverse('Hi Bob')).toStrictEqual('boB iH');
});

//UPPERCASE
test('popcorn changes to POPCORN', () => {
    expect(toUppercase.toUppercase('popcorn')).toStrictEqual('POPCORN');
});

test('Hello there changes to HELLO THERE', () => {
    expect(toUppercase.toUppercase('Hello there')).toStrictEqual('HELLO THERE');
});

//NO VOWELS
test('popcorn changes to ppcrn', () => {
    expect(noVowels.noVowels('popcorn')).toStrictEqual('ppcrn');
});

test('aeiou changes to an empty string', () => {
    expect(noVowels.noVowels('aeiou')).toStrictEqual('');
});