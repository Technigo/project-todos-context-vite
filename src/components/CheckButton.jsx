import { useRef } from "react";
import "./CheckButton.css";
import { useTask } from "../contexts/TaskContext";

export const CheckButton = ({ todo, index }) => {
  const { taskData, addTask } = useTask();
  const taskRef = useRef();

  const clicked = () => {
    console.log("Checkbox:", todo, index);
    taskRef.current.classList.toggle("complete");
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
