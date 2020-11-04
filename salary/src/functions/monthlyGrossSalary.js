const getMonthlyGrossSalary = (annualGrossSalary) => {
    if(isInvalid(annualGrossSalary)) throw 'Your parameter has to be a number';
    return annualGrossSalary/12;
}

const isInvalid = (annualGrossSalary) => {
    return (isNaN(annualGrossSalary) || annualGrossSalary===null)
}

export default getMonthlyGrossSalary;