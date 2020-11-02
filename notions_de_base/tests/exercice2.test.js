const getSmallerNumber = require("../exercise2")

describe('testing getSmallerNumber function', ()=> {
    test('getSmallerNumber must return -2', () => {
        expect(getSmallerNumber([-2, 6, 10])).toEqual(-2);
    })
})
describe('testing getSmallerNumber error statements', () => {
    test('throw error when parameter is not an array', () => {
        expect(() => {getSmallerNumber("toto")}).toThrow('Your parameter must be an array');
    })
    test('throw error when array does not contain only numbers', () => {
        expect(() => {getSmallerNumber([-3, 5, "toto"])}).toThrow('Your array must contain numbers only');
    })
})
