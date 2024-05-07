import React from 'react';
import { useTodoContext } from './TodoContext';

const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;