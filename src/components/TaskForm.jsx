import { useState } from "react";
import { useTask } from "../context/TaskContext";

const TaskForm = () => {
  const [text, setText] = useState("");
  const { addTask } = useTask();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        value={text}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
