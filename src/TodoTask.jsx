import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import "./TodoTask.css";

export const TodoTask = ({ todo, index }) => {
  const todoContext = useContext(TodoContext);

  return (
    <div className="TodoTask">
      <label className="TodoTask-label">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) => {
            todoContext.toggleTodo(index, e.target.checked);
          }}
          className="TodoTask-checkbox"
        />
        {todo.text}
      </label>
      <button
        onClick={(e) => todoContext.removeTodo(index)}
        className="TodoTask-delete"
      >
        Delete
      </button>
    </div>
  );
};
