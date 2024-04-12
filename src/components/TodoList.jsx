import { useTodoContext } from "../context/TodoContext";
import { TodoCard } from "./TodoCard";

import "./TodoList.css";

const TodoList = () => {
  const { todos, toggleComplete, removeTodo, formatCreatedAt } =
    useTodoContext();

  return (
    <div className="todo-list-container" aria-label="Task List">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          formatCreatedAt={formatCreatedAt}
        />
      ))}
    </div>
  );
};

export default TodoList;

/* this allows to display todos */

/* handle checkbox: added and <input> element of type 'checkbox'. set it 'checked' attribute based on the 'completed' property of each to do item. then added an 'onChange' event handler to call the ´toggleComplete´ function provided by the context when the checkbox is clicked. Next update the 'TodoContext'*/
