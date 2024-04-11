import { useState } from "react"
import { useTasks } from "../contexts/TasksContext"
import deleteIcon from "/icon-delete.png"
import "./Task.css"

export const TaskDone = ({ task }) => {
  const [done, setDone] = useState(false)
  const { deleteDoneTask, addTask, toggleChecked } = useTasks()

  const toggleDone = (event) => { 
    setDone(event.target.checked)
    toggleChecked(task.id)
    addTask(task)
    deleteDoneTask(task.task)
  }

  return (
    <div className={task.done ? "task-box checked" : "task-box"}>
      <div className="task">
        <div className="checkbox-field">
          <input
            className="checkbox"
            type="checkbox"
            checked={done}
            onChange={toggleDone}
          />
          <span className="checkmark"></span>
        </div>
        <p>{task.task}</p>
      </div>
      <button className="button" onClick={() => deleteDoneTask(task.task)}>
        <img className="delete-icon" src={deleteIcon} alt="Delete icon" />
      </button>
    </div>
  )
}
