import { useTodoContext } from "../context/TodoProvider";
import TodoItem from "../components/TodoItem";

const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
