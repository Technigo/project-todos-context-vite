import { createContext, useContext, useState } from "react"

const TaskContext = createContext()

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Buy bread",
      done: false
    },
    {
      id: 2,
      task: "Book dentistapp.",
      done: true
    },
  ])
  const [tasksDone, setTasksDone] = useState([
    {
      id: null,
      task: "",
      done: false
    },
  ])
  const [nextId, setNextId] = useState(3)
  const [done, setDone] = useState(false)

  const addTask = (newTask) => {
    setTasks((prevTask) => [...prevTask, newTask])
    setNextId(nextId + 1)
  }

  const deleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task.task !== taskToDelete)
    setTasks(newTasks)
  }

  const toggleChecked = (taskToToggle) => {
    const changed = tasks.map((task) => task.id).indexOf(taskToToggle)
    const doneStatus = tasks[changed].done
    
    const updatedList = tasks
    const targetTask = updatedList.find((task) => task.id === taskToToggle)
    if (targetTask) {
      updatedList[changed].done = (doneStatus ? false : true)
    }
    setTasks(updatedList)
  }

  const addTaskDone = (newTaskDone) => {
    setTasksDone((prevTasksDone) => [...prevTasksDone, newTaskDone])
  }

  return (
    <TaskContext.Provider
      value={{ tasks, tasksDone, nextId, addTask, deleteTask, toggleChecked, addTaskDone }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => useContext(TaskContext)
