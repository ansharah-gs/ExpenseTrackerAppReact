export default (state,action)=>{
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transactions=>transactions.id!==action.payload)
                // the transactions except the one that is deleted
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
                // transaction that were previously there and the new one that is just added ... takes value and put it out
            }
        // case value:
        
        //     break;
    
        default:
            return state;
    }
}