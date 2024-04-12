import moment from "moment"
import { useState } from "react"
import { useTasks } from "../contexts/TasksContext"
import addIcon from "/icon-add.png"
import "./TaskForm.css"

export const TaskForm = () => {
  const { nextId, addTask } = useTasks()
  const [newTask, setNewTask] = useState({
    id: null,
    task: "",
    done: false,
    createdAt: "",
  })

  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      task: event.target.value,
      id: nextId,
      done: false,
      createdAt: moment().format(),
    })
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
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <input
            className="input-field"
            type="text"
            name="task"
            value={newTask.task}
            onChange={handleChange}
            placeholder="Add new task here..."
          />
        </label>
        <button
          type="submit"
          className="submit-button"
          aria-label="Button to add task"
        >
          <img className="add-icon" src={addIcon} alt="Add task icon" />
        </button>
      </form>
    </div>
  )
}
