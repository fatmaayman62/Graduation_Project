import React, { createContext, useState } from "react";

export const CounterShoppingList = createContext();

function CounterShoppingListProvider({ children }) {

  const [counter, setCounter] = useState(0);
    let [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  function changeMode(x) {
    if (x == "light") {
      setMode("light");
    } else {
      setMode("dark");
    }
    localStorage.setItem("mode", x); 
  }

  return (
    <CounterShoppingList.Provider value={{counter, setCounter,mode, setMode,changeMode}}>
      {children}
    </CounterShoppingList.Provider>
  );
}

export default CounterShoppingListProvider;
