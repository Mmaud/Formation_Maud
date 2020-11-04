import getMonthlyGrossSalary from '../functions/monthlyGrossSalary';
import getMonthlyNetSalary from '../functions/monthlyNetSalary';
import React, { useState } from 'react';

const Salaries = () => {
    const [annualGrossSalary, setAnnualGrossSalary] = useState(0);
    const [monthlyNetSalary, setMonthlyNetSalary] = useState();
    const [monthlyGrossSalary, setMonthlyGrossSalary] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            setMonthlyGrossSalary(getMonthlyGrossSalary(annualGrossSalary));
            setMonthlyNetSalary(getMonthlyNetSalary(annualGrossSalary));
            
        } catch (error) {
           console.log(error); 
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
        <h3>Monthly gross salary</h3>
        <p>{monthlyGrossSalary}</p>
        <h3>Monthly net salary</h3>
        <p>{monthlyNetSalary}</p>
        </div>
    );
}

export default Salaries;