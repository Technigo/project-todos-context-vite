import { useTodoContext } from "../context/TodoContext";
import { TodoCard } from "./TodoCard";

import "./TodoList.css";

const TodoList = () => {
  const { todos, toggleComplete, removeTodo, formatCreatedAt } = useTodoContext();

  const uncompletedTasks = todos.filter(todo => !todo.completed);
  const completedTasks = todos.filter(todo => todo.completed);

  return (
    <div className="todo-list-container" aria-label="Task List">
      <div className='TodoTasks'>
        {uncompletedTasks.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            formatCreatedAt={formatCreatedAt}
          />
        ))}
      </div>
      <div className=' CompletedTasks'>
        {completedTasks.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            formatCreatedAt={formatCreatedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
