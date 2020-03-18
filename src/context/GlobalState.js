import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//Initial State
const initialState = {
  //dummy transactions
  //expense negative number, income positive number
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
};

// Create context

export const GlobalContext = createContext(initialState);

// Provider component
// props are named children because we are wraping components in App
//children = everything globalprovider is wrapped around
export const GlobalProvider = ({ children }) => {
  //use reducer usereducer takes in wherever are reducer is => appreducer file
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //provider component provides state and actions to the components that its wrapped around
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
