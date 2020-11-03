const getObjectList = require('../exercice3');
const sortsCardsByPrice = require('../exercise6');

describe('sortsCardsByPrice sort the card by prices', () => {
    test('sortsCardsByPrice must return the card with this order : chaise table canape', () => {
        let cards = [{ quantity: 8, item: { name: 'chaise', price: 10, } },
        { quantity: 2, item: { name: 'table', price: 50, } },
        { quantity: 1, item: { name: 'canape', price: 200, } }];
        let sortedCards = sortsCardsByPrice(cards);
        expect(getObjectList(sortedCards)).toStrictEqual([ 'chaise', 'table','canape']);
    })
})