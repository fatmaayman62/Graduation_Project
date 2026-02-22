import React, { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom' 
import MedicineTable from '../Components/MedicineTable'
import { UserContextMain } from '../../ChooseUserPage/UserContext'
export default function Layout() {
        const { mode,setMode, changeMode } = useContext(UserContextMain);

    return (
        <main className={mode}>
            <div className={'min-h-screen bg-[#F8F9FA] dark:bg-[#000e29] dark:text-white'}>
                <Navbar />
                <div className="container pt-18">
                    <Outlet></Outlet>

                    {/* <MedicineTable/> */}

                </div>
            </div>
        </main>
    )
}
