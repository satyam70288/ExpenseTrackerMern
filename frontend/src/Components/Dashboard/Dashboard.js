import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()
    const [year, setYear] = React.useState(2024)
    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart year={year} />    
                    </div>
                    <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p style={{ color: 'green' }}>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p style={{ color: 'green' }}>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p style={{ color: 'red' }}>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p style={{ color: 'red' }}>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}
const DashboardStyled = styled.div`
    .dashboard-title {
        text-align: center;
        font-size: 2.8rem;
        font-weight: 700;
        margin-bottom: 2rem;
        color: #4c6ef5; /* Soft blue for a fresh look */
        font-family: 'Montserrat', sans-serif; /* Modern, clean font */
    }

    .stats-con {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 0 2rem;

        .chart-con {
            background: #f0f4ff; /* Light pastel blue background */
            border: 2px solid #e1e9ff;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            padding: 2rem;
            height: 70vh; /* Ensure chart height is 70vh */
            overflow: hidden;

            }
             .amount-con {
                display: flex;
                gap: 1.5rem;
                margin-top: 2rem;

                .income,
                .expense,
                .balance {
                    background: #4c6ef5; /* Soft blue for consistency */
                    color: #fff;
                    border-radius: 12px;
                    padding: 1.2rem;
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

                    &:hover {
                        transform: scale(1.05);
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
                    }

                    h2 {
                        font-size: 1.4rem;
                        font-weight: 600;
                        font-family: 'Roboto', sans-serif;
                    }

                    p {
                        font-size: 2.2rem;
                        font-weight: bold;
                        font-family: 'Roboto', sans-serif;
                    }
                }

        }

        .history-con {
            background: #fff;
            border: 2px solid #e9ecef;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            padding: 1.5rem;
            font-family: 'Roboto', sans-serif;

            h2 {
                font-size: 1.6rem;
                font-weight: 700;
                margin-bottom: 1rem;
                color: #4c6ef5;
                display: flex;
                justify-content: space-between;
                align-items: center;

                span {
                    color: #4c6ef5;
                    font-size: 1.4rem;
                }
            }

            .salary-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background:rgb(104, 113, 238);
                border-radius: 10px;
                padding: 1rem;
                margin-bottom: 1rem;

                p {
                    font-size: 1.3rem;
                    font-weight: 500;
                    color: #495057;
                }
            }
        }
    }

    // Media queries for responsiveness
    @media (max-width: 768px) {
        .stats-con {
            gap: 1.5rem;
            padding: 0 1rem;
        }

        .chart-con {
            .amount-con {
                gap: 1.5rem;
            }
        }

        .history-con {
            .salary-item {
                flex-direction: column;
                align-items: flex-start;

                p {
                    font-size: 1.1rem;
                }
            }
        }
    }

    @media (max-width: 480px) {
        .stats-con {
            gap: 1rem;
            padding: 0 0.5rem;
        }

        .chart-con,
        .history-con {
            padding: 1rem;
        }

        .amount-con {
            gap: 1rem;
        }

        .income,
        .expense,
        .balance {
            padding: 0.8rem;
            p {
                font-size: 1.8rem;
            }
        }

        .history-con {
            .salary-item {
                flex-direction: column;
                align-items: flex-start;
                padding: 0.8rem 1rem;
                p {
                    font-size: 1rem;
                }
            }
        }
    }
`;









export default Dashboard