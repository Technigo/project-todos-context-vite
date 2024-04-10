import { useContext } from 'react'
import { createContext, useState, useEffect } from 'react'
const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    fetch('https://6612c3e453b0d5d80f665515.mockapi.io/tasks/content')
      .then((res) => res.json())
      .then((data) => {
        setTaskList(data)
        setFilteredTasks(data)
      })
  }, [])

  const addTask = (newTask) => {
    fetch('https://6612c3e453b0d5d80f665515.mockapi.io/content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        setTaskList((prevTasks) => [...prevTasks, data])
      })
      .catch((error) => {
        console.error('Error adding task:', error)
      })
  }
  const deleteTask = (taskId) => {
    fetch(
      `https://6612c3e453b0d5d80f665515.mockapi.io/tasks/content/${taskId}`,
      {
        method: 'DELETE',
      }
    )
      .then((response) => {
        if (response.ok) {
          setTaskList((prevTasks) =>
            prevTasks.filter((task) => task.id !== taskId)
          )
        }
      })
      .catch((error) => {
        console.error('Error deleting task:', error)
      })
  }

  const completeTask = (taskId, isCompleted) => {
    // Find the task to be updated to include all its data in the PUT request.
    const taskToUpdate = taskList.find((task) => task.id === taskId)
    if (!taskToUpdate) {
      console.error('Task not found')
      return
    }

    // Update the 'completed' status of the task.
    const updatedTask = { ...taskToUpdate, completed: isCompleted }

    fetch(
      `https://6612c3e453b0d5d80f665515.mockapi.io/tasks/content/${taskId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not update task')
        }
        return response.json()
      })
      .then(() => {
        setTaskList((currentTasks) =>
          currentTasks.map((task) => {
            if (task.id === taskId) {
              return updatedTask
            }
            return task
          })
        )
      })
      .catch((error) => console.error('Error updating task:', error))
  }

  return (
    <TodoContext.Provider
      value={{
        taskList,
        addTask,
        deleteTask,
        completeTask,
        completeTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
export const useToDoContext = () => {
  const context = useContext(TodoContext)
  return context
}
