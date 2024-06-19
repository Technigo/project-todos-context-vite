import { createContext, useContext, useState } from 'react'

const TodoContext = createContext()

export const useTodoContext = () => useContext(TodoContext)

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, text, completed: false },
    ])
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  )
}