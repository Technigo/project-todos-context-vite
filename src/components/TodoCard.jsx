import { RemoveButton } from './RemoveButton';
import thumTack from "../assets/thumb-tack.png";
import undoArrow from "../assets/undo-arrow.svg";
import "./TodoCard.css"

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
        {todo.completed ? (
          <img 
            src={undoArrow}
            alt="undo-arrow"
            className="undoArrow"
            onClick={() => toggleComplete(todo.id)}
          />
        ) : (
          <img 
            src={thumTack} 
            alt="thum-tack"
            className="thumbtack"
            onClick={() => toggleComplete(todo.id)}
          />
        )}
        <span className={todo.completed ? 'completed' : ''}>
          {todo.text}
        </span>
        <RemoveButton onClick={() => removeTodo(todo.id)} aria-label="Remove task" />
      </div>
      <p className="timestamp">Created {formatCreatedAt(todo.createdAt)}</p>
    </div>
  );
};