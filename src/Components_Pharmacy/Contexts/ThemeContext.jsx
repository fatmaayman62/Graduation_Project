import { useEffect, useState } from "react";
import { createContext } from "react";

export let ModeContext = createContext('')

export default function ModeContextProvider(props) {
    const [mode, setMode] = useState(localStorage.getItem('mode')||'light')
    function changeMode() {
        if (mode == 'dark') {
            setMode('light')
        }
        else {
            setMode('dark')
        }
    }
    
    useEffect(()=>{
        localStorage.setItem('mode',mode)
    },[mode])
    return <ModeContext.Provider value={{mode,changeMode}}>
        {props.children}
    </ModeContext.Provider>
}