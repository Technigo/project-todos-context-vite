import { useState } from "react"
import { useTasks } from "../contexts/TasksContext"

export const TaskForm = () => {
  const { tasks, addTask } = useTasks()

  const [newTask, setNewTask] = useState({
    id: null,
    task: "",
  })

  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      task: event.target.value, id: (tasks.length + 1) })
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
      <form onSubmit={handleSubmit}>
        <label>
          To do:
          <input
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
