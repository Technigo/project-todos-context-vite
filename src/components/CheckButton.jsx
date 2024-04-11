import { useRef } from "react";
import "./CheckButton.css";
import { useTask } from "../contexts/TaskContext";

export const CheckButton = ({ todo, index }) => {
  const { taskData, addTask, completeTask } = useTask();
  const taskRef = useRef();

  const clicked = () => {
    taskRef.current.classList.toggle("complete");

    completeTask(index, todo.id);
    console.log("Checkbox:", todo.id);
  };

  return (
    <form>
      <input
        ref={taskRef}
        className={todo.complete ? "complete" : ""}
        checked={todo.complete}
        type="checkbox"
        id={index}
        name="task-check"
        onChange={clicked}
      ></input>
      <label htmlFor={index}>{todo.title}</label>
    </form>
  );
};
