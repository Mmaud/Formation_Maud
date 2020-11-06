import { InvalidArgumentError } from '../functions/invalidArgumentError';
import getMonthlyGrossSalary from '../functions/monthlyGrossSalary';

describe(('getMonthlyGrossSalary must return the monthly gross salary with annual gross salary entry'), () => {
    test(('must return 2950 whith 35400 in parameter'), () => {
        expect(getMonthlyGrossSalary(35400)).toBe(2950);
    })
    test(('must return 2 decimal numbers'), () => {
        expect(getMonthlyGrossSalary(35000)).toBe(2916.67);
    })
})

describe(('getMonthlyGrossSalary error statements'), () => {
    test(('throw an error when parameter is empty'), () => {
        expect(() => getMonthlyGrossSalary()).toThrow(new InvalidArgumentError('Empty parameter'));
    })
    test(('throw an error when parameter is not a number'), () => {
        expect(() => getMonthlyGrossSalary('toto')).toThrow(new InvalidArgumentError('Invalid parameter'));
    })
})