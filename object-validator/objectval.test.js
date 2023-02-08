//require

test('price is a key of the object', () => {
    expect(objectVal({price: 30}, 'price')).toBe(true);
});

test('price is a key of an object with many keys', () => {
    expect(objectVal({id: 1, value: 4, price: 50}, 'price')).toBe(true);
});

test('price is not a key of the object', () => {
    expect(objectVal({id: 1, value: 70}, 'price')).toBe(false);
})