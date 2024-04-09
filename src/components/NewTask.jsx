//1. Input for writing
import { useState } from "react";
import "../style/NewTask.scss";
import { useTask } from "../context/TaskContext";

export const NewTask = () => {
  const { addTask } = useTask();
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    addTask(taskInput);
    setTaskInput("");
  };

  return (
    <>
      <div className="task-input-box">
        <label htmlFor="new-task">New Task:</label>
        <input
          type="text"
          id="new-task"
          placeholder="walking the dog"
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
        />
        <button onClick={handleAddTask}>Add to List</button>
      </div>
    </>
  );
};
