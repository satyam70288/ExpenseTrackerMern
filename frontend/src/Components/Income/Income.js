import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() => {
        getIncomes()
    }, [])

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    display: flex;
    flex-direction: column; /* Column layout for small screens */
    overflow: auto;
    height: 100%;
    
    ::-webkit-scrollbar {
        display: none; /* Hide scrollbar in webkit browsers */
    }

    -ms-overflow-style: none;  /* For Internet Explorer 10+ */
    scrollbar-width: none; /* For Firefox */

    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;

        span {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }

    .income-content {
        display: flex;
        flex-direction: column; /* Column layout for small screens */
        gap: 2rem;
        
        .incomes {
            flex: 1;
        }
    }

    /* Media query for medium and large screens (min-width: 768px) */
    @media (min-width: 768px) {
        .income-content {
            flex-direction: column; /* Ensure column layout for medium screens */
        }
    }

    /* Media query for larger screens (min-width: 1024px) */
    @media (min-width: 1024px) {
        .income-content {
            flex-direction: row; /* Switch to row layout on larger screens */
            gap: 3rem;
        }
    }
`;

export default Income;
