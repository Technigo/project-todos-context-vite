import { useTask } from "../context/TaskContext";
import { useTheme } from "../context/ThemeContext";
import "../style/ToDoList.scss";
import { GiBurningDot } from "react-icons/gi";

export const ToDoList = () => {
  const { toDoList, removeTask, updatedStatus } = useTask();
  const { darkMode } = useTheme();

  console.log(toDoList);

  let totalLenght = toDoList.length;
  console.log(totalLenght);

  let uncompletedTasks = [];

  if (toDoList.length === 0) {
    console.log("No tasks in the list.");
  } else {
    uncompletedTasks = toDoList.filter((task) => !task.status);
  }

  console.log(uncompletedTasks);

  let uncomlpetedLength = uncompletedTasks.length;

  return (
    <div className="tasklist">
      <p>All Tasks: {totalLenght}</p>
      <p>Uncompleted: {uncomlpetedLength}</p>
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
            <GiBurningDot /> {taskObj.text} <GiBurningDot />
            <button onClick={() => removeTask(taskObj.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
