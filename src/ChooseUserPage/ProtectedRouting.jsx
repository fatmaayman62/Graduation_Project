import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRouting({children}) {
    const savedData = JSON.parse(localStorage.getItem("userDataReg"))||null;

    if(savedData&&savedData.login===true){

        return children
    }else{
        return <Navigate to={"/"} replace />
    }

}

export default ProtectedRouting