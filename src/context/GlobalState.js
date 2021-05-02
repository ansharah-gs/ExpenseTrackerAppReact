import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';//import appreducer


//create initial state
const initialState={
    transactions:[
        // {id:1,description:"Income 1", transactionAmount:1000},
        // {id:2,description:"Expense 1", transactionAmount:-100},
        // {id:3,description:"Income 2", transactionAmount:1000},
        // {id:4,description:"Expense 2", transactionAmount:-50},
    ]//contains list of objects
}

//create global context
export const GlobalContext=createContext(initialState);
//create  a provider for global context
export const GlobalProvider=({children})=>{ //this passes our states  to components
    //creating a reducer so when a state changes it calls a reducer  and create a new state to manage it 
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions that are gong to call the reducer
    function deleteTransaction(id){
        dispatch({// returning an object
           type: 'DELETE_TRANSACTION',
           payload:id
        });
    }
    function addTransaction(transaction){
        dispatch({// returning an object
           type: 'ADD_TRANSACTION',
           payload:transaction
        });
    }
    return(
        //linking context to provider
        //in value we give access to our transactions
        <GlobalContext.Provider value={
            {
                transactions:state.transactions,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}
