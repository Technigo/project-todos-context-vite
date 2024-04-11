import { useState } from "react"
import { useTasks } from "../contexts/TasksContext"
import "./TaskForm.css"

export const TaskForm = () => {
  const { tasks, nextId, addTask } = useTasks()
  const [newTask, setNewTask] = useState({
    id: null,
    task: "",
    done: false
  })

  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      task: event.target.value, id: nextId, done: false })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newTask.task) {
      addTask(newTask)
      setNewTask({ id: null, task: "" })
    } else {
      alert("Please fill in the field")
    }
  }

  return (
    <div className="task-form">
      <h2>Add new task here:</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label >
          To do:
          <input
            className="input-field"
            type="text"
            name="task"
            value={newTask.task}
            onChange={handleChange}
            placeholder="Type a task.."
          />
        </label>
        <button
          type="submit"
          className="submit-button"
          aria-label="Button to add task"
        >
          Add task
        </button>
      </form>
    </div>
  )
}
