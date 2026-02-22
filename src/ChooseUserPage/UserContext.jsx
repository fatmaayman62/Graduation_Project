import React, { createContext, useState } from "react";

export const UserContextMain = createContext();

function UserContextMainProvider({ children }) { 
let [mode, setMode] = useState(localStorage.getItem("mode") || "dark");
function changeMode() {
  const newMode = mode === "dark" ? "light" : "dark";
  setMode(newMode);
  localStorage.setItem("mode", newMode);
}

  return (
    <UserContextMain.Provider value={{mode, setMode,changeMode}}>
      {children}
    </UserContextMain.Provider>
  );
}

export default UserContextMainProvider;
