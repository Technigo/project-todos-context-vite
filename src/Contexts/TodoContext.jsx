import { useContext } from 'react'
import { createContext, useState, useEffect } from 'react'
const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [taskList, setTaskList] = useState()
  useEffect(() => {
    fetch('https://6612c3e453b0d5d80f665515.mockapi.io/tasks/content')
      .then((res) => res.json())
      .then((data) => {
        setTaskList(data)
      })
  }, [])

  return (
    <TodoContext.Provider value={{ taskList }}>{children}</TodoContext.Provider>
  )
}
export const useToDoContext = () => {
  const context = useContext(TodoContext)
  return context
}
