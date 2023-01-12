import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();
 
// use context vs create context
export const StateProvider = ({ reducer, initialState, children }) => {
  // console.log(children);
  // well and good at all
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);
