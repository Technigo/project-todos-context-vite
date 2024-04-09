//1.Complete all button that applies to all the taks
//2. Counting total task display

import { useState } from "react";
import { useTask } from "../context/TaskContext";
import "../style/ToDoList.scss";
import { GiBurningDot } from "react-icons/gi";

export const ToDoList = () => {
  const { toDoList, darkMode, removeTask } = useTask();
  const [done, setDone] = useState(false);

  const getBackgroundClases = () => {
    if (darkMode === false) {
      return "background-ligth";
    } else {
      return "background-dark";
    }
  };

  return (
    <div className="tasklist">
      <ul>
        {toDoList.map((taskObj, id) => (
          <li className={getBackgroundClases()} key={id}>
            <input
              type="checkbox"
              value={taskObj.completed}
              onChange={(event) => setDone(event.target.value)}
            ></input>
            <button onClick={removeTask}>🗑️</button>
            <GiBurningDot /> {taskObj.text} <GiBurningDot />
          </li>
        ))}
      </ul>
    </div>
  );
};
