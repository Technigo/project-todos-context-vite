import { createContext, useState, useContext } from "react"

const TodoContext = createContext(null)

export const useTodoContext = () => useContext(TodoContext)

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
      setTodos([...todos, todo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
    

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo}} >
      { children }
    </TodoContext.Provider>
  )
}
 