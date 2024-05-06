// TodoItem.js
import React from 'react';
import { useTodoContext } from './TodoProvider';

const TodoItem = ({ todo }) => {
  const { removeTodo, toggleComplete } = useTodoContext();

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.taskName}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
