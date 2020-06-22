import React, { useContext } from 'react';
import { GlobalTransactionContext } from '../Context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
    const { transactions } = useContext(GlobalTransactionContext);
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction = {transaction} />))}
            </ul>
        </div>
    )
}