import { createContext, useContext, useState } from "react";

const CheckboxContext = createContext()

export const CheckboxProvider = ({ children }) => {
    const [tasks, setTasks] = useState("unchecked")
    
const toggleChecked = () => {
    setTasks(tasks === "checked" ? "unchecked" : "checked")
    }

return (
    <CheckboxContext.Provider value={{ tasks, toggleChecked }}>
        {children}
    </CheckboxContext.Provider>
)
} 

export const useCheckbox = () => useContext(CheckboxContext)