import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import "./TodoTask.css";

export const TodoTask = ({ todo, index }) => {
  const todoContext = useContext(TodoContext);

  return (
    <div className="TodoTask">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          todoContext.toggleTodo(index, e.target.checked);
        }}
      />
      {todo.text}
      <button onClick={(e) => todoContext.removeTodo(index)}>Delete</button>
    </div>
  );
};
