import { InvalidArgumentError } from "./InvalidArgumentError";

const getMonthlyGrossSalary = (annualGrossSalary) => {
    if (isEmpty(annualGrossSalary)) throw new InvalidArgumentError("Empty parameter"); 
    if(isInvalid(annualGrossSalary)) throw new InvalidArgumentError("Invalid parameter");
    return annualGrossSalary/12;
}

const isInvalid = (parameter) => {
    return (parameter !== undefined && isNaN(parameter));
}
const isEmpty = (parameter) => {
    return (parameter===undefined || parameter.length ===0)
}

export default getMonthlyGrossSalary;