import { useTodoContext } from "../contexts/TodoContext";

export const ToDoCard = ({ todo, toggleComplete }) => {
  const { removeTodo, clearTodos } = useTodoContext();

  const handleRemove = () => {
    removeTodo(todo.id);
  };
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.description}
      </span>
      <button onChange={handleRemove}>Remove</button>
    </li>
  );
};
