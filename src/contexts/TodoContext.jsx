import { createContext, useContext, useState } from "react";

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState([])
    
const addTodo = (newTodo) => {
    setTodo((prevTodos) => [...prevTodos, newTodo])}

return (
    <TodoContext.Provider value={{ todo, addTodo }}>
        {children}
    </TodoContext.Provider>
)
} 

export const useTodo = () => useContext(TodoContext)