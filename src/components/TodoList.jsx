import { useTodoContext } from "../context/TodoContext";
import moment from "moment";

import "./TodoList.css";

const TodoList = () => {
  const { todos, toggleComplete, removeTodo } = useTodoContext();

  return (
    <div className="todo-list-container" aria-label="Task List">
      {todos.map((todo) => (
        <div className="todo-card" key={todo.id}>
          <div className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              aria-label={`Mark task ${
                todo.completed ? "incomplete" : "complete"
              }`}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              aria-label="Remove task"
            >
              Remove
            </button>
          </div>
          <span className="timestamp">
            {moment(todo.createdAt).format("D/MM/YY")}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

/* this allows to display todos */

/* handle checkbox: added and <input> element of type 'checkbox'. set it 'checked' attribute based on the 'completed' property of each to do item. then added an 'onChange' event handler to call the ´toggleComplete´ function provided by the context when the checkbox is clicked. Next update the 'TodoContext'*/

// TodoList.js
import { useTodoContext } from './TodoContext'

const TodoList = () => {
  const { todos, removeTodo } = useTodoContext()

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
