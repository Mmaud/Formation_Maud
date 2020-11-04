const { default: getMonthlyGrossSalary } = require("./monthlyGrossSalary");

const getMonthlyNetSalary = (monthlyGrossSalary) => {
    if(isInvalid(monthlyGrossSalary)) throw 'Your parameter has to be a number';
    return monthlyGrossSalary - (20/100*monthlyGrossSalary);
}

const isInvalid = (parameter) => {
    return (isNaN(parameter) || parameter===null);
}

export default getMonthlyNetSalary;