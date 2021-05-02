import React,{ useContext } from 'react'
//import globalcontext
import { GlobalContext } from '../context/GlobalState';



export const Transaction = ({transaction}) => {
    //get the delete transaction function
    const {deleteTransaction}=useContext(GlobalContext);
    // check if its positive or negative
    const sign =transaction.transactionAmount<0 ? '-' : '+';
    return (
        <div>
            <li className={transaction.transactionAmount<0 ? 'minus' : 'plus'}>
                {transaction.description}
                <span>{sign} ${Math.abs(transaction.transactionAmount)}</span>
                <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">X</button> 
                {/* adding the deleteTransaction function to button click function */}
            </li>
        </div>
    )
}
