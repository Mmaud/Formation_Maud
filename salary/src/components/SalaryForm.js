import { getAnnualGrossSalaryByMonthlyGrossSalary, getAnnualGrossSalaryByMonthlyNetSalary, getMonthlyGrossSalary, getMonthlyNetSalary } from '../functions/getSalaries';
import React, { useEffect, useState } from 'react';
import ErrorComponent from './ErrorComponent';

const Salaries = () => {
    const [annualGrossSalary, setAnnualGrossSalary] = useState(0);
    const [monthlyGrossSalary, setMonthlyGrossSalary] = useState(0);
    const [monthlyNetSalary, setMonthlyNetSalary] = useState(0);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    let [ref, setRef] = useState();

    const handleChangeAnnualGrossSalary = e => {
        setAnnualGrossSalary(e.target.value);
        setRef('annualGrossSalary');
    }
    const handleChangeMonthlyGrossSalary = e => {
        setMonthlyGrossSalary(e.target.value);
        setRef('monthlyGrossSalary');
    }
    const handleChangeMonthlyNetSalary = e => {
        setMonthlyNetSalary(e.target.value);
        setRef('monthlyNetSalary');

    }
    const calcSalaries = (param) => {
        try {
            if (param === annualGrossSalary) {
                setMonthlyGrossSalary(getMonthlyGrossSalary(annualGrossSalary));
                setMonthlyNetSalary(getMonthlyNetSalary(annualGrossSalary));
            }
            else if (param === monthlyGrossSalary) {
                setAnnualGrossSalary(getAnnualGrossSalaryByMonthlyGrossSalary(monthlyGrossSalary));
                setMonthlyNetSalary(getMonthlyNetSalary(annualGrossSalary));
            }
            else if (param === monthlyNetSalary) {
                setAnnualGrossSalary(getAnnualGrossSalaryByMonthlyNetSalary(monthlyNetSalary));
                setMonthlyGrossSalary(getMonthlyGrossSalary(annualGrossSalary));
            }
            setHasError(false);
        } catch (error) {
            setHasError(true);
            if (error.message === 'Invalid parameter') setErrorMessage('It that you did not enter a number : You have to give a number');
            else if (error.message === 'Empty parameter') setErrorMessage('It seems that your input is empty : you have to give a number')
        }
    }

    useEffect(() => {
        if (ref === 'annualGrossSalary') {
            calcSalaries(annualGrossSalary);
            setAnnualGrossSalary(annualGrossSalary);
        }
        else if (ref === 'monthlyGrossSalary') {
            setMonthlyGrossSalary(monthlyGrossSalary);
            calcSalaries(monthlyGrossSalary);
        }
        else {
            setMonthlyNetSalary(monthlyNetSalary);
            calcSalaries(monthlyNetSalary);
        }

    }, [annualGrossSalary, monthlyGrossSalary, monthlyNetSalary, ref])

    return (
        <div>
            <input
                name='Annual gross salary'
                value={annualGrossSalary}
                onChange={handleChangeAnnualGrossSalary}
            />
            <input
                name='Monthly gross salary'
                value={monthlyGrossSalary}
                onChange={handleChangeMonthlyGrossSalary}
            />
            <input
                name='Monthly net salary'
                value={monthlyNetSalary}
                onChange={handleChangeMonthlyNetSalary}
            />
            <ErrorComponent hasError={hasError} message={errorMessage}/>

        </div>
    );
}

export default Salaries;