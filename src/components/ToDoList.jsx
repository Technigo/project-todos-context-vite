//1.Complete all button that applies to all the taks
//2. Counting total task display

import { useTask } from "../context/TaskContext";
import "../style/ToDoList.scss";
import { GiBurningDot } from "react-icons/gi";

export const ToDoList = () => {
  const { toDoList } = useTask();

  return (
    <div className="tasklist">
      <ul>
        {toDoList.map((task, id) => (
          <li key={id}>
            <GiBurningDot /> {task} <GiBurningDot />
          </li>
        ))}
      </ul>
    </div>
  );
};
