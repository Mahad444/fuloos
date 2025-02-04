import React from 'react';

interface FinancialReportProps {
    income: number;
    expenses: number;
}

const FinancialReport: React.FC<FinancialReportProps> = ({ income, expenses }) => {
    const netIncome = isNaN(income) || isNaN(expenses) ? 0 : income - expenses;

    return (
        <div>
            <h1>Financial Report</h1>
            <p>Income: ${isNaN(income) ? '0.00' : income.toFixed(2)}</p>
            <p>Expenses: ${isNaN(expenses) ? '0.00' : expenses.toFixed(2)}</p>
            <p>Net Income: ${isNaN(netIncome) ? '0.00' : netIncome.toFixed(2)}</p>
        </div>
    );
};

export default FinancialReport;