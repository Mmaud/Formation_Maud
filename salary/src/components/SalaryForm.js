import getMonthlyGrossSalary from '../functions/monthlyGrossSalary';
import getMonthlyNetSalary from '../functions/monthlyNetSalary';
import React, { useState } from 'react';
import ErrorComponent from './ErrorComponent';
import SalariesResult from './SalariesResult';

const Salaries = () => {
    const [annualGrossSalary, setAnnualGrossSalary] = useState(0);
    const [monthlyNetSalary, setMonthlyNetSalary] = useState();
    const [monthlyGrossSalary, setMonthlyGrossSalary] = useState();
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        setAnnualGrossSalary();
        setMonthlyGrossSalary();
        setMonthlyNetSalary();
        setHasError();

        try {
            setMonthlyGrossSalary(getMonthlyGrossSalary(annualGrossSalary));
            setMonthlyNetSalary(getMonthlyNetSalary(annualGrossSalary));

        } catch (error) {
            setHasError(true);
            if (error.message === 'Invalid parameter') setErrorMessage('It that you did not enter a number : You have to give a number');
            else if (error.message === 'Empty parameter') setErrorMessage('It seems that your input is empty : you have to give a number')
        }
    }

    const handleChange = (event) => {
        setAnnualGrossSalary(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Annual Gross Salary
            <input type="text"
                        value={annualGrossSalary}
                        onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <SalariesResult monthlyGrossSalary={monthlyGrossSalary} monthlyNetSalary={monthlyNetSalary}/>
            <ErrorComponent hasError={hasError} message={errorMessage} />

        </div>
    );
}

export default Salaries;