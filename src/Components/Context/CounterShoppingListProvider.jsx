import React, { createContext, useContext, useState } from "react";
import { UserContextMain } from "../../ChooseUserPage/UserContext";

export const CounterShoppingList = createContext();

function CounterShoppingListProvider({ children }) {

  const [counter, setCounter] = useState(0); 
   

  return (
    <CounterShoppingList.Provider value={{counter, setCounter}}>
      {children}
    </CounterShoppingList.Provider>
  );
}

export default CounterShoppingListProvider;
