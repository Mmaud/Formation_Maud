const finalCardsPrice = require('../exercise4');

describe('finalCardsPrice give the total price of a card', () => {
    test('finalCardsPrice must return 380', () => {
        let cards = [{ quantity: 8, item: { name: 'chaise', price: 10, } },
        { quantity: 2, item: { name: 'table', price: 50, } },
        { quantity: 1, item: { name: 'canape', price: 200, } }];
        expect(finalCardsPrice(cards)).toEqual(380);
    })
})

describe('testing finalCardsPrice error statements', () => {
    test('parameter is empty', () => {
        expect(() => finalCardsPrice([])).toThrow('Your paramater is empty, it must contain a card');
    })
    test('throw error when there is no price', () => {
        let cardsWithoutPrice = [{ quantity: 8, item: { name: 'chaise', price: 10, } },
        { quantity: 2, item: { name: 'table', price: null } }];
        expect(() => finalCardsPrice(cardsWithoutPrice)).toThrow('some item(s) have no price or quantity  : invalid cards');
    })
    test('throw error when there is no quantity', () => {
        let cardsWithoutQuantity = [{ quantity: 8, item: { name: 'chaise', price: 10, } },
        { quantity: "toto", item: { name: 'table', price: 8 } }]
        expect(() => finalCardsPrice(cardsWithoutQuantity)).toThrow('some item(s) have no price or quantity  : invalid cards');
    })
})