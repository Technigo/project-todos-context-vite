import { useTask } from "../context/TaskContext";
import { useTheme } from "../context/ThemeContext";
import "../style/ToDoList.scss";
import { GiBurningDot } from "react-icons/gi";

export const ToDoList = () => {
  const { toDoList, removeTask, updatedStatus } = useTask();
  const { darkMode } = useTheme();
  /* const [done, setDone] = useState(false);
  console.log(done); */

  console.log(toDoList);

  return (
    <div className="tasklist">
      <ul>
        {toDoList.map((taskObj) => (
          <li
            className={darkMode ? "background-dark" : "background-light"}
            key={taskObj.id}
          >
            {/* <input type="checkbox" value={done} onClick={!done}></input> */}
            <input
              type="checkbox"
              checked={taskObj.status}
              onChange={() => updatedStatus(taskObj.id)}
            />
            <GiBurningDot /> {taskObj.text} <GiBurningDot />
            <button onClick={() => removeTask(taskObj.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
