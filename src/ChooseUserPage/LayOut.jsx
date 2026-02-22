import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { UserContextMain } from './UserContext';

function LayOut() {
   let {mode}=useContext(UserContextMain);
 
  return (
    <main className={mode}>
        <Outlet></Outlet>
    </main>
  )
}

export default LayOut