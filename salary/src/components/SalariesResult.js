const SalariesResult = ({monthlyGrossSalary, monthlyNetSalary}) => {
    if(monthlyGrossSalary != null && monthlyNetSalary != null) {
        return (
            <div>
                <h3>Monthly gross salary</h3>
                <p>{monthlyGrossSalary}</p>
                <h3>Monthly net salary</h3>
                <p>{monthlyNetSalary}</p>
            </div>
        )
    }
    return null;
    
}

export default SalariesResult;