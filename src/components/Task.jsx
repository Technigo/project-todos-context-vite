import { useState } from "react";
import { useTasks } from "../contexts/TasksContext";
import deleteIcon from "/icon-delete.png";
import "./Task.css"

export const Task = ({ task }) => {
  const [checkedTask, setCheckedTask] = useState(false);
  const { deleteTask, addTaskDone } = useTasks();

  const toggleChecked = () => {
    setCheckedTask(checkedTask ? false : true);
 //   addTaskDone();
  }

  return (
    <div className={checkedTask ? "task-box checked" : "task-box"}>
      <div className="task">
        <div className="checkbox-field">
          <input
            className="checkbox"
            type="checkbox"
            onChange={toggleChecked}
          />
          <span className="checkmark"></span>
        </div>
        <p>{task.task}</p>
      </div>
      <button className="button" onClick={() => deleteTask(task.task)}>
        <img className="delete-icon" src={deleteIcon} alt="Delete icon" />
      </button>
    </div>
  );
};
