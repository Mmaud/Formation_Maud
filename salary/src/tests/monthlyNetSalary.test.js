import getMonthlyGrossSalary from '../functions/monthlyGrossSalary';
import getMonthlyNetSalary from '../functions/monthlyNetSalary';

describe('getMonthlyNetSalary must return the monthly net salary with monthly gross salary entry', () => {
    test('must return 2360 whith 2950 parameter', () => {
        expect(getMonthlyNetSalary(2950)).toStrictEqual(2360);
    })
})

describe('Testing getMonthlyNetSalary error statements', () => {
    test('throw an error when parameter is empty', () => {
        expect(() => getMonthlyNetSalary()).toThrow('Your parameter has to be a number');
    })
    test('Throw an error when parameter is not a number', () => {
        expect(() => getMonthlyNetSalary('toto')).toThrow('Your parameter has to be a number');
    })
})