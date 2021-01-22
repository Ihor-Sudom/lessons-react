import React from 'react';
import Transaction from './Transaction.jsx';


const TransactionsList = ({transactions}) => {
  return (
    <ul className="transactions">
      {transactions.map(el => <Transaction key={el.id} {...el} />)}
    </ul>
  )
};

export default TransactionsList;