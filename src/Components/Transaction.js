import React, { useContext } from 'react';
import { GlobalTransactionContext } from '../Context/GlobalState'

export const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalTransactionContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={sign === '-' ? 'minus' : 'plus'}>
            {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}