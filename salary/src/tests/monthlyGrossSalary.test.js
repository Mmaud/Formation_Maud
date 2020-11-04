import getMonthlyGrossSalary from '../functions/monthlyGrossSalary';

describe(('getMonthlyGrossSalary must return the monthly gross salary with annual gross salary entry'), () => {
    test(('must return 2950 whith 35400 in parameter'), () => {
        expect(getMonthlyGrossSalary(35400)).toStrictEqual(2950);
    })
})

describe(('getMonthlyGrossSalary error statements'), () => {
    test(('throw an error when parameter is empty'), () => {
        expect(() => getMonthlyGrossSalary()).toThrow(new Error('Your parameter has to be a number'));
    })
    test(('throw an error when parameter is not a number'), () => {
        expect(() => getMonthlyGrossSalary('toto')).toThrow(new Error('Your parameter has to be a number'));
    })
})