import { createContext, useContext, useState } from "react"

const TaskContext = createContext()

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([{
        task: "Buy bread" 
        },{
        task: "Book dentistapp."
    }])

  return (
    <TaskContext.Provider value={{ tasks }}>
        {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => useContext(TaskContext)
