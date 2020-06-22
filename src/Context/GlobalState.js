import React, { createContext, useReducer } from 'react';
import GlobalTransactionReducer from '../Reducer/GlobalTransactionReducer'

var initialTransactionState = {
    transactions: []  //Empty Inistal Array Value
}

//Create Context
export const GlobalTransactionContext = createContext(initialTransactionState);

//Provider Component
export const GlobalTransactionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalTransactionReducer, initialTransactionState);

    //Action
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
      }
    return (
        <GlobalTransactionContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalTransactionContext.Provider>
    );
}