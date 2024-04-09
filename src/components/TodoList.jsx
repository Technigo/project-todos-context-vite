// A component to display a list of todo items
import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import moment from "moment";

export const TodoList = () => {
  // Extract todos and the toggleTodo function from our TodoContext.
  const { todos, toggleTodo } = useContext(TodoContext);

  // Count for completed and uncompleted tasks
  // .filter: keeps all the items that matches (returns "true" in ((todo) => todo.completed))
  const completedCount = todos.filter((todo) => todo.completed).length;
  const uncompletedCount = todos.length - completedCount;

  return (
    <div className="list-container">
      <div>Completed: {completedCount}</div>
      <div>Uncompleted: {uncompletedCount}</div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id} // Use the unique id (= Date.now() thing) of each todo for the key prop.
            style={{ textDecoration: todo.completed ? "line-through" : "none" }} // If the todo is completed, strike through the text; if not, display normally.
          >
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.completed} // The checkbox is checked if the todo is marked as completed.
              onChange={() => toggleTodo(todo.id)} // When you click the checkbox, the toggleTodo function is called with the todo's ID to switch its "completed" status between done and not done.
            />
            {todo.todo}{" "}
            <span>{moment(todo.createdAt).format("YYYY-MM-DD HH:mm")}</span>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
