import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

export const TodoForm = () => {
  const { todos, setTodos } = useTodoContext();
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { task, completed: false }]);
      setTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};
