import { createContext, useState, useContext } from "react";

const ModeChangeContext = createContext()

export const ModeProvider = ({children}) =>{
    const [mode, setMode] = useState ('light')

    const handleModeChange = () => {
        setMode (mode === 'light' ? 'dark' : 'light')
    }

    return (
        <ModeChangeContext.Provider value={{mode, handleModeChange}}>
            {children}
        </ModeChangeContext.Provider>

    )
}

export const useModeChangeData = () => useContext(ModeChangeContext)