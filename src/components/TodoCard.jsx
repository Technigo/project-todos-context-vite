import { RemoveButton } from './RemoveButton';

export const TodoCard = ({ todo, id, toggleComplete, removeTodo, formatCreatedAt }) => {
  return (
    <div className="todo-card" key={todo.id}>
      <div className="todo-item">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          aria-label={`Mark task ${todo.completed ? 'incomplete' : 'complete'}`}
        />
        <span className={todo.completed ? 'completed' : ''}>
          {todo.text}
        </span>
        <RemoveButton onClick={() => removeTodo(todo.id)} aria-label="Remove task" />
      </div>
      <span className="timestamp">Created {formatCreatedAt(todo.createdAt)}</span>
    </div>
  );
};