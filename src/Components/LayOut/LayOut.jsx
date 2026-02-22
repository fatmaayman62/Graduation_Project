import React, { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { CounterShoppingList } from "../Context/CounterShoppingListProvider";
import { UserContextMain } from "../../ChooseUserPage/UserContext";

function LayOut() {
    const { mode,setMode, changeMode } = useContext(UserContextMain);
return (
    <>
      <main className={mode}>
        <div className="bg-[#F8F9FA] dark:bg-[#000E29] dark:text-white">
          <Navbar changeMode={changeMode} mode={mode} />
          <div className="min-h-screen">
            <Outlet></Outlet>
          </div>
        </div>
      </main> 
    </>
  );
}

export default LayOut;
