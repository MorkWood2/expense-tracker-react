//Reducer how wee specify application state changes in response to certain actions
//to our context
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        //essentially create new state and change values
        ...state,
        transactions: state.transactions.filter(
          //for each transaction, where transaction.id is not equal to action.payllad
          //our new state only contains ids not in our action payload
          transaction => transaction.id !== action.payload
        )
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};
