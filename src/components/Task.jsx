import { useState } from "react"
import { useTasks } from "../contexts/TasksContext"
import deleteIcon from "/icon-delete.png"
import "./Task.css"

export const Task = ({ task }) => {
  const [done, setDone] = useState(false)
  const { deleteTask, addTaskDone, toggleChecked } = useTasks()

  const toggleDone = (event) => { 
    setDone(event.target.checked)
    toggleChecked(task.id)
 //   addTaskDone();
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
        <p>{task.id}</p>
      </div>
      <button className="button" onClick={() => deleteTask(task.task)}>
        <img className="delete-icon" src={deleteIcon} alt="Delete icon" />
      </button>
    </div>
  )
}
