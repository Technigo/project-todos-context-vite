import { useRef } from "react";
import "./CheckButton.css";
import { useTask } from "../contexts/TaskContext";

export const CheckButton = ({ todo, index }) => {
  const { taskData, addTask, completeTask } = useTask();
  const taskRef = useRef();

  const clicked = () => {
    taskRef.current.classList.toggle("complete");

    //add complete state to taskData
    completeTask(index);
    console.log("Checkbox:", taskData);
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
