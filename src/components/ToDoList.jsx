//1.Complete all button that applies to all the taks
//2. Counting total task display

import { useTask } from "../context/TaskContext";
import { useTheme } from "../context/ThemeContext";
import "../style/ToDoList.scss";
import { GiBurningDot } from "react-icons/gi";
/* import { IoMdDoneAll } from "react-icons/io"; */

export const ToDoList = () => {
  const { toDoList, removeTask, updatedStatus } = useTask();
  const { darkMode } = useTheme();
  /* const [done, setDone] = useState(false);
  console.log(done); */

  /*   const getBackgroundClases = () => {
    if (darkMode === false) {
      return "background-light";
    } else {
      return "background-dark";
    }
  }; */

  console.log(toDoList);

  return (
    <div className="tasklist">
      <ul>
        {toDoList.map((taskObj, id) => (
          <li
            className={darkMode ? "background-dark" : "background-light"}
            key={id}
          >
            {/* <input type="checkbox" value={done} onClick={!done}></input> */}
            <input
              type="checkbox"
              checked={taskObj.status}
              onChange={() => updatedStatus(taskObj.id)}
            />
            <GiBurningDot /> {taskObj.text} <GiBurningDot />
            <button onClick={removeTask}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
