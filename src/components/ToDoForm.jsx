import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

export const TodoForm = () => {
  const { todos, setTodos, addTask } = useTodoContext();
  const [task, setTask] = useState({
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add a new task</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New task"
        />
        <button onClick={addTask}>+</button>
      </form>
    </div>
  );
};
