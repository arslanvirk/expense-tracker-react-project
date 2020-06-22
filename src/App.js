import React from 'react';
import './App.css';
import { Header } from './Components/Header'
import { Balance } from './Components/Balance'
import { IncomeExpense } from './Components/IncomeExpense'
import { TransactionList } from './Components/TransactionList'
import { AddTransaction } from './Components/AddTransaction'
import {GlobalTransactionProvider} from './Context/GlobalState'

function App() {
  return (
    <GlobalTransactionProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalTransactionProvider>
  );
}

export default App;
