import { useTodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, toggleComplete, removeTodo } = useTodoContext();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

/* this allows to display todos */

/* handle checkbox: added and <input> element of type 'checkbox'. set it 'checked' attribute based on the 'completed' property of each to do item. then added an 'onChange' event handler to call the ´toggleComplete´ function provided by the context when the checkbox is clicked. Next update the 'TodoContext'*/
