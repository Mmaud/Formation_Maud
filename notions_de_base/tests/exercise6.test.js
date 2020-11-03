const getObjectList = require('../exercice3');
const sortCardsByPrice = require('../exercise6');

describe('sortCardsByPrice sort the card by prices', () => {
    test('sortCardsByPrice must return the card with this order : chaise table canape', () => {
        let cards = [{ quantity: 8, item: { name: 'chaise', price: 10, } },
        { quantity: 2, item: { name: 'table', price: 50, } },
        { quantity: 1, item: { name: 'canape', price: 200, } }];
        let sortedCards = sortCardsByPrice(cards);
        expect(getObjectList(sortedCards)).toStrictEqual([ 'chaise', 'table','canape']);
    })
})

describe('testing sortCardsByPrice error statements', () => {
    test('throw an error when parameter is empty', () => {
        expect(() => sortCardsByPrice([])).toThrow('Your paramater is empty, it must contain a card');
    })
    test('throw an error when price is invalid', () => {
        let cardsWithWrongPrice = [{ quantity: 8, item: { name: 'chaise', price: 10, } },
        { quantity: 2, item: { name: 'table', price: undefined, } }];
        expect(() => sortCardsByPrice(cardsWithWrongPrice)).toThrow('Some price item is invalid');
    })
})