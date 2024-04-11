import { createContext, useContext, useState } from "react"

const TaskContext = createContext()

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [tasksDone, setTasksDone] = useState([
  ])
  const [nextId, setNextId] = useState(1)

  const addTask = (newTask) => {
    setTasks((prevTask) => [...prevTask, newTask])
    setNextId(nextId + 1)
  }

  const deleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task.task !== taskToDelete)
    setTasks(newTasks)
  }

  const deleteDoneTask = (taskToDelete) => {
    const newTasksDone = tasksDone.filter((task) => task.task !== taskToDelete);
    setTasksDone(newTasksDone)
  };

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
      value={{ tasks, tasksDone, nextId, addTask, deleteTask, toggleChecked, addTaskDone, deleteDoneTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => useContext(TaskContext)
