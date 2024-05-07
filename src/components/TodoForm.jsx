import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useTodoContext();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  
  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;