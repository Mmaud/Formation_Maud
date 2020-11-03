const {getObjectList} = require("../exercice3");

let card = [{quantity: 8, item: {name: 'chaise',price: 10,}},
    {quantity: 2, item: {name: 'table',price: 50,}},
    {quantity: 1,item: {name: 'canape',price: 200,}}];

describe('Testing getObjectList function', () => {
    test('getObjectList must return an array of strings', () => {
        console.log(getObjectList(card));
        expect(getObjectList(card)).toStrictEqual(['chaise','table','canape']);
    })
})

describe('Testing getObjectList error statements', ()=> {
    test('parameter is empty', () => {
        expect(() => getObjectList([])).toThrow('Your paramater is empty, it must contain a caddie');
    })
})