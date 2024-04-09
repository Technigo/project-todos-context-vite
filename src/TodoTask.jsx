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
          const newTodos = [...todoContext.todoList];
          newTodos[index].done = e.target.checked;
          todoContext.setTodos(newTodos);
        }}
      />
      {todo.text}
      <button
        onClick={(e) => {
          const newTodos = [...todoContext.todoList];
          // splice is to remove an element from an array
          newTodos.splice(index, 1);
          todoContext.setTodos(newTodos);
        }}
      >
        Delete
      </button>
    </div>
  );
};
