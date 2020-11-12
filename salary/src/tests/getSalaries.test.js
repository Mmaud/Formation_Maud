import { InvalidArgumentError } from '../functions/invalidArgumentError';
import {getAnnualGrossSalaryByMonthlyGrossSalary, getAnnualGrossSalaryByMonthlyNetSalary, getMonthlyGrossSalary, getMonthlyNetSalary} from '../functions/getSalaries';

describe(('getAnnualGrossSalaryByMonthlyGrossSalary must return the annual gross salary with monthlyGrossSalary'), () => {
    test(('must return 35400 with 2950 in parameter'), () => {
        expect(getAnnualGrossSalaryByMonthlyGrossSalary(2950)).toBe(35400);
    })
    test(('must return 2 decimals numbers'), () => {
        expect(getAnnualGrossSalaryByMonthlyGrossSalary(1216.487)).toBe(14597.84);
    })
})

describe(('getAnnualGrossSalaryByMonthlyNetSalary must return the annual gross salary with monthlyNetSalary'), () => {
    test(('must return 35400 with 2950 in parameter'), () => {
        expect(getAnnualGrossSalaryByMonthlyNetSalary(2360)).toBe(35400);
    })
    test(('must return 2 decimals numbers'), () => {
        expect(getAnnualGrossSalaryByMonthlyNetSalary(973.199)).toBe(14597.99);
    })
})

describe(('getMonthlyGrossSalary must return the monthly gross salary with annual gross salary entry'), () => {
    test(('must return 2950 whith 35400 in parameter'), () => {
        expect(getMonthlyGrossSalary(35400)).toBe(2950);
    })
    test(('must return 2 decimal numbers'), () => {
        expect(getMonthlyGrossSalary(35000)).toBe(2916.67);
    })
})

describe('getMonthlyNetSalary must return the monthly net salary with annual gross salary entry', () => {
    test('must return 2360 whith 35400 parameter', () => {
        expect(getMonthlyNetSalary(35400)).toBe(2360);
    })
    test('must return 2 decimal numbers', () => {
        expect(getMonthlyNetSalary(35000)).toBe(2333.33);
    })
})

describe(('getAnnualGrossSalaryByMonthlyGrossSalary error statements'), () => {
    test(('Throw an error when parameter is empty'), () => {
        expect(() => getAnnualGrossSalaryByMonthlyGrossSalary()).toThrow(new InvalidArgumentError('Empty parameter'));
    })
    test('Throw an error when parameter is not a number', () => {
        expect(() => getAnnualGrossSalaryByMonthlyGrossSalary("toto")).toThrow(new InvalidArgumentError('Invalid parameter'));
    })
})

describe(('getAnnualGrossSalaryByMonthlyNetSalary error statements'), () => {
    test(('Throw an error when parameter is empty'), () => {
        expect(() => getAnnualGrossSalaryByMonthlyNetSalary()).toThrow(new InvalidArgumentError('Empty parameter'));
    })
    test('Throw an error when parameter is not a number', () => {
        expect(() => getAnnualGrossSalaryByMonthlyNetSalary("toto")).toThrow(new InvalidArgumentError('Invalid parameter'));
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

describe('Testing getMonthlyNetSalary error statements', () => {
    test('throw an error when parameter is empty', () => {
        expect(() => getMonthlyNetSalary()).toThrow(new InvalidArgumentError('Empty parameter'));
    })
    test('Throw an error when parameter is not a number', () => {
        expect(() => getMonthlyNetSalary('toto')).toThrow(new InvalidArgumentError('Invalid parameter'));
    })
})