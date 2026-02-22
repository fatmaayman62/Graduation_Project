import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRouting({children}) {
    const savedData = JSON.parse(localStorage.getItem("userDataReg"))||null;
    const location = useLocation();
    const pathName = "/"+(location.pathname).split("/")[1];
    console.log(pathName)

    if(savedData&&savedData.login===true&&savedData.reg===pathName){

        return children
    }else if((savedData&&savedData.login===true)&&savedData.reg!==pathName){
        return <Navigate to={savedData.reg} replace />

    }else{
        return <Navigate to={"/"} replace />
    }

}

export default ProtectedRouting
