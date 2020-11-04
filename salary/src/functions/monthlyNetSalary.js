import getMonthlyGrossSalary from "./monthlyGrossSalary";

const getMonthlyNetSalary = (annualGrossSalary) => {
    if(isInvalid(annualGrossSalary)) throw new Error ('Your parameter has to be a number');
    let monthlyGrossSalary = getMonthlyGrossSalary(annualGrossSalary);
    return monthlyGrossSalary - (20/100*monthlyGrossSalary);
}

const isInvalid = (parameter) => {
    return (isNaN(parameter) || parameter===null);
}

export default getMonthlyNetSalary;