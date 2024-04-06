import { useState } from "react";
import "./ListItem.css";
import { useTodo } from "../../contexts/TodoContext";

export const ListItem = ({ desc, id, isDone }) => {
  const [status, setStatus] = useState(isDone);

  const handleChecked = event => {
    // const updatedTask = { ...task, isDone: event.target.checked };
    // console.log(updatedTask);
    setStatus(event.target.checked);
  };

  return (
    <li className="task">
      <input
        type="checkbox"
        name={desc}
        id={`task-${id}`}
        checked={status}
        onChange={handleChecked}
      />
      {desc}
    </li>
  );
};
