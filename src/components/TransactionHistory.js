import React,{useContext} from 'react'
//import global context
import { GlobalContext } from '../context/GlobalState'
//import transactions(to have access to it)
import { Transaction } from './Transaction';

export const TransactionHistory = () => {
    //get transactions from global context
    const {transactions}=useContext(GlobalContext);
    console.log(transactions);
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {/* iterate over transactions */}
               { transactions.map(transaction=>(
                <Transaction key={transaction.id} transaction={transaction}/>// have key to uniquely identify the transactions
               )
                )}
               
               {/* <li className="minus">
                    Project 1 Salalries
                   <span>-$500</span>
                   <button className="delete-btn">X</button>
               </li> */}
            </ul>
        </div>
    )
}
