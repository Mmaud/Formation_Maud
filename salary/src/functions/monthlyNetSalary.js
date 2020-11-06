import { InvalidArgumentError } from "./InvalidArgumentError";
import getMonthlyGrossSalary from "./monthlyGrossSalary";

const getMonthlyNetSalary = (annualGrossSalary) => {
    if(isEmpty(annualGrossSalary)) throw new InvalidArgumentError('Empty parameter')
    if(isInvalid(annualGrossSalary)) throw new InvalidArgumentError('Invalid parameter');
    let monthlyGrossSalary = getMonthlyGrossSalary(annualGrossSalary);
    return monthlyGrossSalary - (20/100*monthlyGrossSalary);
}

const isInvalid = (parameter) => {
    return (parameter !== undefined && isNaN(parameter));
}

const isEmpty = (parameter) => {
    return (parameter===undefined || parameter.length===0);
}

export default getMonthlyNetSalary;