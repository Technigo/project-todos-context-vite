import { useEffect } from "react";
import "./ListItem.css";
import { useTodo } from "../../contexts/TodoContext";
import { Badge } from "../badge/Badge";

export const ListItem = ({ id }) => {
  const { tasks, setTasks, removeTask } = useTodo();
  const currentTask = tasks.find(item => item._id === id);

  const handleCheckUpdate = event => {
    const update = { ...currentTask, isDone: event.target.checked };
    setTasks(tasks => tasks.map(item => (item._id === id ? update : item)));
  };

  const handleRemove = () => {
    removeTask(id);
  };

  return (
    <li className="task">
      <form className="task-form">
        <input
          type="checkbox"
          name={currentTask.desc}
          id={`task-${id}`}
          checked={currentTask.isDone}
          onChange={handleCheckUpdate}
        />
        <label
          htmlFor={`task-${id}`}
          className="task-desc">
          {currentTask.desc}
        </label>
        <button
          className="remove"
          aria-label="remove task"
          onClick={handleRemove}>
          <i className="fa-solid fa-xmark fa-lg"></i>
        </button>
      </form>
      <div className="badge-container">
        <Badge
          text={currentTask.category}
          type="cat"
        />
        <Badge
          text={currentTask.sprint}
          type="spr"
        />
        <Badge
          text={currentTask.project}
          type="pro"
        />
      </div>
    </li>
  );
};
