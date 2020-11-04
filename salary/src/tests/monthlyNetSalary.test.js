import getMonthlyNetSalary from '../functions/monthlyNetSalary';

describe('getMonthlyNetSalary must return the monthly net salary with annual gross salary entry', () => {
    test('must return 2360 whith 35400 parameter', () => {
        expect(getMonthlyNetSalary(35400)).toStrictEqual(2360);
    })
})

describe('Testing getMonthlyNetSalary error statements', () => {
    test('throw an error when parameter is empty', () => {
        expect(() => getMonthlyNetSalary()).toThrow(new Error('Your parameter has to be a number'));
    })
    test('Throw an error when parameter is not a number', () => {
        expect(() => getMonthlyNetSalary('toto')).toThrow(new Error('Your parameter has to be a number'));
    })
})