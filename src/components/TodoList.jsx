// A component to display a list of todo items
import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { Todo } from "./Todo";
import moment from "moment";

export const TodoList = () => {
  // Extract todos and the toggleTodo function from our TodoContext.
  const { todos, toggleTodo } = useContext(TodoContext);

  // .filter: keeps all the items that matches (returns "true" in ((todo) => todo.completed))
  const completedTodos = todos.filter((todo) => todo.completed);
  const uncompletedTodos = todos.filter((todo) => !todo.completed);

  // Count for completed and uncompleted tasks
  const completedCount = completedTodos.length;
  const uncompletedCount = uncompletedTodos.length;

  return (
    <div className="list-container">
      <div>Completed: {completedCount}</div>
      <div>Uncompleted: {uncompletedCount}</div>
      <ul>
        <h2>Uncompleted</h2>
        {uncompletedTodos.map((todo) => (
          // create Todo.jsx component to handle both completed and uncompleted todos
          // these props (id, completed, todo...) are the data that Todo.jsx needs
          <Todo
            id={todo.id}
            completed={todo.completed}
            todo={todo.todo}
            createdAt={todo.createdAt}
            onChange={() => toggleTodo(todo.id)}
          />
        ))}
        <h2>Completed</h2>
        {completedTodos.map((todo) => (
          <Todo
            id={todo.id}
            completed={todo.completed}
            todo={todo.todo}
            createdAt={todo.createdAt}
            onChange={() => toggleTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};
