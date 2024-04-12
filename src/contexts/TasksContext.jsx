import { createContext, useContext, useState } from "react"

const TaskContext = createContext()

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [nextId, setNextId] = useState(1)

  const addTask = (newTask) => {
    setTasks((prevTask) => [...prevTask, newTask])
    setNextId(nextId + 1)
  }

  const deleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task.id !== taskToDelete)
    setTasks(newTasks)
  }

  const toggleChecked = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    )
  }

  const completeAll = () => {
    setTasks(
      tasks.map((task) =>
      task.done === false ? { ...task, done: true} : task
      )
    )
  }

  const deleteAllDone = () => {
    const newList = tasks.filter((task) => task.done === false)
    setTasks(newList)
  }

  return (
    <TaskContext.Provider
      value={{ tasks, nextId, addTask, deleteTask, toggleChecked, completeAll, deleteAllDone }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => useContext(TaskContext)
