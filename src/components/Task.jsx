import { useTasks } from "../contexts/TasksContext"
import deleteIcon from "/icon-delete.png"
import "./Task.css"

export const Task = ({ task }) => {
  const { toggleChecked, deleteTask } = useTasks()

  const toggleDone = () => { 
    toggleChecked(task.id)
  }

  return (
    <div className={task.done ? "task-box checked" : "task-box"}>
      <div className="task">
        <div className="checkbox-field">
          <input
            className="checkbox"
            type="checkbox"
            checked={task.done}
            onChange={toggleDone}
            aria-label="checkbox for tasks"
          />
          <span className="checkmark"></span>
        </div>
        <p>{task.task}</p>
      </div>
      <button className="button" onClick={() => deleteTask(task.id)}>
        <img className="delete-icon" src={deleteIcon} alt="Delete icon" />
      </button>
    </div>
  )
}
