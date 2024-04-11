import { useTodoContext } from "../context/TodoContext";

import "./TodoList.css";

const TodoList = () => {
  const { todos, toggleComplete, removeTodo } = useTodoContext();

  return (
    <ul className="todo-list" aria-label="Task List">
      {todos.map((todo) => (
        <li className="todo-item" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            aria-label={`Mark task ${
              todo.completed ? "incomplete" : "complete"
            }`}
          />
          {/*    {todo.isEditing ? (
            <input type="text" 
          )} */}
          <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
          <button onClick={() => removeTodo(todo.id)} aria-label="Remove task">
            Remove
          </button>
        </li>
      ))}
    </ul>
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
