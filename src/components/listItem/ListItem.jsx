import { useState } from "react";
import "./ListItem.css";
import { useTodo } from "../../contexts/TodoContext";

export const ListItem = ({ desc, id, isDone }) => {
  const { tasks, setTasks } = useTodo();
  const currentTask = tasks.find(item => item._id === id);
  const [isChecked, setIsChecked] = useState(isDone);

  const handleTaskUpdate = event => {
    setIsChecked(event.target.checked);
    const update = { ...currentTask, isDone: !isChecked };
    setTasks(tasks => tasks.map(item => (item._id === id ? update : item)));
  };

  return (
    <li className="task">
      <input
        type="checkbox"
        name={desc}
        id={`task-${id}`}
        checked={isChecked}
        onChange={handleTaskUpdate}
      />
      {desc}
    </li>
  );
};
