import { useRef } from "react";
import "./CheckButton.css";
import { useTask } from "../contexts/TaskContext";

export const CheckButton = ({ todo, index }) => {
  const { taskData, addTask, completeTask } = useTask();
  const taskRef = useRef();

  const clicked = () => {
    console.log("Checkbox:", taskData);
    taskRef.current.classList.toggle("complete");
    completeTask(taskRef, index);
        console.log("Checkbox 2:", taskData);
  };

  return (
    <form>
      <input
        ref={taskRef}
        type="checkbox"
        id={index}
        name="task-check"
        onChange={clicked}
      ></input>
      <label htmlFor={index}>{todo}</label>
    </form>
  );
};
