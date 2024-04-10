import { useState } from "react";
import { useTasks } from "../contexts/TasksContext";

export const Task = ({ task }) => {
  const [checkedTask, setCheckedTask] = useState(false);
  const { deleteTask, addTaskDone } = useTasks();

  const toggleChecked = () => {
    setCheckedTask(checkedTask ? false : true);
    addTaskDone();
  };

  return (
    <div className={checkedTask ? "task checked" : "task"}>
      <input type="checkbox" onChange={toggleChecked} />
      <p>{task.task}</p>
      <button onClick={() => deleteTask(task.task)}>Delete</button>
    </div>
  );
};
