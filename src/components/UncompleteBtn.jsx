//didn't use this time. will work on it later

import { useAppData } from "../contexts/FormContext";
import { useState } from "react";

export const UncompletedBtn = () => {
  const { todos, toggleTodo } = useAppData();
  const [undoTask, setUndoTask] = useState([]);

  const unfinishBtn = () => {
    const uncompletedTask = todos.filter((todo) => !todo.completed);
    setUndoTask(uncompletedTask);
  };

  const handleToggle = (index, completed) => {
    toggleTodo(index, !completed);
  };
  return (
    <div>
      <button onClick={unfinishBtn}>Uncompleted</button>
      <ul>
        {undoTask.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};
