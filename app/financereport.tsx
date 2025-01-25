import React from 'react';

interface FinancialReportProps {
    income: number;
    expenses: number;
}

const FinancialReport: React.FC<FinancialReportProps> = ({ income, expenses }) => {
    const netIncome = income - expenses;

    return (
        <div>
            <h1>Financial Report</h1>
            <p>Income: ${income.toFixed(2)}</p>
            <p>Expenses: ${expenses.toFixed(2)}</p>
            <p>Net Income: ${netIncome.toFixed(2)}</p>
        </div>
    );
};

export default FinancialReport;