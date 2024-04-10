import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';

const TodoForm = () => {
  const { addTodo } = useTodoContext();
  const [todoText, setTodoText] = useState('');

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    addTodo({
      id: Date.now(),
      text: todoText,
    });
    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={todoText}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
