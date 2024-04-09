import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import moment from "moment";

export const TodoList = () => {
  const { todos, toggleTodo } = useContext(TodoContext);

  return (
    <div className="list-container">
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          <input
          className="checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          {todo.todo} -{" "}
          <span>{moment(todo.createdAt).format("YYYY-MM-DD HH:mm")}</span>{" "}
        </li>
      ))}
    </ul>
    </div>
  );
};
