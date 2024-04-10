import { ToDoCard } from "./ToDoCard";
import { useTodoContext } from "../contexts/TodoContext";

export const TodoList = () => {
  const { todos, setTodos } = useTodoContext();

  // Function to toggle the completed status of a task
  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

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
