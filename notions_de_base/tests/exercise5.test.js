const getObjectList = require('../exercice3');
const sortCardsByQuantities = require('../exercise5');

describe('sortCardsByQuantities sort the card by quantities', () => {
    test('sortCardsByQuantities must return the card with this order : canape table chaise', () => {
        let cards = [{ quantity: 8, item: { name: 'chaise', price: 10, } },
        { quantity: 2, item: { name: 'table', price: 50, } },
        { quantity: 1, item: { name: 'canape', price: 200, } }];
        let sortedCards = sortCardsByQuantities(cards);
        expect(getObjectList(sortedCards)).toStrictEqual(['canape', 'table', 'chaise']);
    })
})

describe('testing sortCardsByQuantities error statements', () => {
    test('parameter is empty', () => {
        expect(() => sortCardsByQuantities([])).toThrow('Your paramater is empty, it must contain a card');
    })
    test('one item has no quantity', () => {
        let cardsWithoutQuantity = [{ quantity: 8, item: { name: 'chaise', price: 10, } },
        { quantity: "toto", item: { name: 'table', price: 50, } }];
        expect(() => sortCardsByQuantities(cardsWithoutQuantity)).toThrow('Some card(s) quantity is not valid');
    })
})