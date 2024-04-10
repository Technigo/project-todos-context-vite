import { ToDoCard } from "./ToDoCard";
import { useTodoContext } from "../contexts/TodoContext";

export const TodoList = () => {
  const { todos, setTodos } = useTodoContext();

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <ToDoCard
            key={index}
            todo={todo}
            toggleComplete={() => toggleComplete(index)}
          />
        ))}
      </ul>
    </div>
  );
};
