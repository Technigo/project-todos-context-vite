import { createContext, useContext, useState } from 'react'

const ToDoContext = createContext()

export const ToDoProvider = ({ children }) => {
  const [ToDo, setToDo] = useState([
    {
      task: 'Walk the dog',
    },
  ])

  const addToDo = (newToDo) => {
    setToDo(prevValue => [...prevValue, {task: newToDo}])
  }

  return (
    <ToDoContext.Provider value={{ ToDo, addToDo }}>{children}</ToDoContext.Provider>
  )
}
export const useToDo = () => {
  const context = useContext(ToDoContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
