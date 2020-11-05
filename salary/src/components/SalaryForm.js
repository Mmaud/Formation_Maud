import getMonthlyGrossSalary from '../functions/monthlyGrossSalary';
import getMonthlyNetSalary from '../functions/monthlyNetSalary';
import React, { useState } from 'react';
import ErrorComponent from './ErrorComponent';

const Salaries = () => {
    const [annualGrossSalary, setAnnualGrossSalary] = useState(0);
    const [monthlyNetSalary, setMonthlyNetSalary] = useState();
    const [monthlyGrossSalary, setMonthlyGrossSalary] = useState();
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            setMonthlyGrossSalary(getMonthlyGrossSalary(annualGrossSalary));
            setMonthlyNetSalary(getMonthlyNetSalary(annualGrossSalary));

        } catch (error) {
            setHasError(true);
            console.log(typeof error.message);
            setErrorMessage(error.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Annual Gross Salary
            <input type="text"
                        value={annualGrossSalary}
                        onChange={e => setAnnualGrossSalary(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {monthlyGrossSalary!=null && (<div><h3>Monthly gross salary</h3>
                <p>{monthlyGrossSalary}</p>
                <h3>Monthly net salary</h3>
                <p>{monthlyNetSalary}</p></div>)}

            {hasError && (<ErrorComponent errorMessage={errorMessage} />)}
        </div>
    );
}

export default Salaries;