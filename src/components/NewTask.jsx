import { useState } from "react";

import { useTask } from "../context/TaskContext";
import { useTheme } from "../context/ThemeContext";

import "../style/NewTask.scss";

export const NewTask = () => {
  const { addTask } = useTask();
  const { darkMode } = useTheme();
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput != "") {
      addTask(taskInput);
      setTaskInput("");
    } else {
      alert("Please add a task");
    }
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

        <button
          className={darkMode ? "dark-button" : "light-button"}
          onClick={() => {
            handleAddTask();
            DisplayTime();
          }}
        >
          Add to List
        </button>
      </div>
    </>
  );
};
