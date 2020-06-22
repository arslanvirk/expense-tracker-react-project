import React, { useContext } from 'react';
import { GlobalTransactionContext } from '../Context/GlobalState'

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalTransactionContext);
    const amounts = transactions.map(transaction => transaction.amount);
    
    const income = amounts.length > 0 && amounts.filter(amount => amount > 0).length > 0 ? 
    amounts.filter(amount => amount > 0).reduce((acc, amount) => acc + amount).toFixed(2) : 0.00;

    const expense = amounts.length > 0 && amounts.filter(amount => amount < 0).length > 0 ? 
    (amounts.filter(amount => amount < 0).reduce((acc, amount) => acc + amount) * -1).toFixed(2) : 0.00;

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    )
}