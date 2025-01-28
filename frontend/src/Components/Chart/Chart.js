import React, { useState } from 'react';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement
);

function Chart() {
    const { incomes = [], expenses = [] } = useGlobalContext(); // Provide default empty arrays
    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear);
    // Helper function to group data by month
    const groupByMonth = (data, year) => {
        return data
            .filter((item) => new Date(item.date).getFullYear() === year)
            .reduce((acc, item) => {
                const month = new Date(item.date).toLocaleString('default', { month: 'long' });
                acc[month] = (acc[month] || 0) + item.amount;
                return acc;
            }, {});
    };

    // Group expenses and incomes by the selected year
    const groupedExpenses = groupByMonth(expenses, year);
    const groupedIncomes = groupByMonth(incomes, year);

    // Combine all unique months
    const months = [...new Set([...Object.keys(groupedExpenses), ...Object.keys(groupedIncomes)])];

    // Prepare the bar chart data
    const barData = {
        labels: months, // All unique months
        datasets: [
            {
                label: 'Monthly Expenses',
                data: months.map((month) => groupedExpenses[month] || 0),
                backgroundColor: 'red',
                borderColor: 'darkred',
                borderWidth: 1,
            },
            {
                label: 'Monthly Incomes',
                data: months.map((month) => groupedIncomes[month] || 0),
                backgroundColor: 'green',
                borderColor: 'darkgreen',
                borderWidth: 1,
            },
        ],
    };

    return (
        <ChartStyled>
            {/* Input field for selecting year */}
            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="year" style={{ marginRight: '0.5rem' }}>
                    Select Year:
                </label>
                <input
                    type="number"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    min="2000"
                    max={currentYear}
                    style={{ padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                />
            </div>

            {/* Bar chart */}
            <Bar data={barData} options={{ responsive: true }} />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart;
