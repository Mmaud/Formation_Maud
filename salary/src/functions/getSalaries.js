import { InvalidArgumentError } from "./InvalidArgumentError";

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

export {getMonthlyGrossSalary, getMonthlyNetSalary};