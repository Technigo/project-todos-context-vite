import moment from "moment";
import { GiBurningDot } from "react-icons/gi";

import { useTask } from "../context/TaskContext";
import { useTheme } from "../context/ThemeContext";

import "../style/ToDoList.scss";

export const ToDoList = () => {
  const { toDoList, removeTask, updatedStatus } = useTask();
  const { darkMode } = useTheme();

  console.log(toDoList);

  return (
    <div className="tasklist">
      <ul>
        {toDoList.map((taskObj) => (
          <li
            className={darkMode ? "background-dark" : "background-light"}
            key={taskObj.id}
          >
            <input
              type="checkbox"
              checked={taskObj.status}
              onChange={() => updatedStatus(taskObj.id)}
            />
            <GiBurningDot className="fireball" /> {taskObj.text}{" "}
            <GiBurningDot className="fireball" />
            <p>{taskObj.date}</p>
            <button
              onClick={() => {
                removeTask(taskObj.id);
              }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
