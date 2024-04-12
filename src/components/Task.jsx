import moment from "moment"
import { useTasks } from "../contexts/TasksContext"
import deleteIcon from "/icon-delete.png"
import "./Task.css"


export const Task = ({ task }) => {
  const { toggleChecked, deleteTask } = useTasks()
  const dayDate = moment().format("dddd do")

  const toggleDone = () => {
    toggleChecked(task.id)
  }

  return (
    <div className={task.done ? "task-box checked" : "task-box"}>
      <div className="task">
        <label>
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
        </label>
        <p>{task.task}</p>
      </div>
      <div>{dayDate}</div>
      <button className="button" onClick={() => deleteTask(task.id)}>
        <img className="delete-icon" src={deleteIcon} alt="Delete icon" />
      </button>
    </div>
  );
};
