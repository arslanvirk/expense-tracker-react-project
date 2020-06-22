import React, { useContext } from 'react';
import { GlobalTransactionContext } from '../Context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalTransactionContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const balance = amounts.length > 0 ? amounts.reduce((acc, amount) => acc + amount).toFixed(2) : 0;

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${balance}</h1>
        </>
    )
}