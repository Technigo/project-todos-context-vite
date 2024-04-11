import { useRef } from "react";
import "./CheckButton.css";
import { useTask } from "../contexts/TaskContext";

export const CheckButton = ({ todo, index }) => {
  const { taskData, addTask, completeTask } = useTask();
  const taskRef = useRef();

  console.log("CheckButton :", todo)

  const clicked = () => {
    taskRef.current.classList.toggle("complete");
    console.log("Checkbox clicked:", todo.id);
    completeTask(todo.id, index);

  };

  return (
    <form>
      <input
        ref={taskRef}
        className={todo.complete ? "complete" : ""}
        checked={todo.complete}
        type="checkbox"
        id={todo.id}
        name="task-check"
        onChange={clicked}
      ></input>
      <label htmlFor={todo.id}>{todo.title}</label>
    </form>
  );
};
