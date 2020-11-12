import { InvalidArgumentError } from "./InvalidArgumentError";

const getAnnualGrossSalaryByMonthlyGrossSalary = (monthlyGrossSalary) => {
    if(isEmpty(monthlyGrossSalary)) throw new InvalidArgumentError("Empty parameter");
    if(isInvalid(monthlyGrossSalary)) throw new InvalidArgumentError("Invalid parameter");
    return decimals(monthlyGrossSalary*12);
}

const getAnnualGrossSalaryByMonthlyNetSalary = (monthlyNetSalary) => {
    if(isEmpty(monthlyNetSalary)) throw new InvalidArgumentError("Empty parameter");
    if(isInvalid(monthlyNetSalary)) throw new InvalidArgumentError("Invalid parameter");
    return decimals(monthlyNetSalary*100/80*12);
}

const getMonthlyGrossSalary = (annualGrossSalary) => {
    if (isEmpty(annualGrossSalary)) throw new InvalidArgumentError("Empty parameter"); 
    if(isInvalid(annualGrossSalary)) throw new InvalidArgumentError("Invalid parameter");
    return decimals(annualGrossSalary/12);
}

const getMonthlyNetSalary = (annualGrossSalary) => {
    if(isEmpty(annualGrossSalary)) throw new InvalidArgumentError('Empty parameter')
    if(isInvalid(annualGrossSalary)) throw new InvalidArgumentError('Invalid parameter');
    return decimals((annualGrossSalary/12) - (20/100*annualGrossSalary/12));
}

const isInvalid = (parameter) => {
    return (parameter !== undefined && isNaN(parameter));
}

const isEmpty = (parameter) => {
    return (parameter===undefined || parameter.length===0);
}

function decimals(number) {
    if (!Number.isInteger(number)) return Number(Number.parseFloat(number).toFixed(2));
    return number;
}

export {getAnnualGrossSalaryByMonthlyGrossSalary, getAnnualGrossSalaryByMonthlyNetSalary, getMonthlyGrossSalary, getMonthlyNetSalary};