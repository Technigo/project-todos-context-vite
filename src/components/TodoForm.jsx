// TodoForm.js
import React, { useState } from 'react';
import { useTodoContext } from './TodoProvider';

const TodoForm = () => {
  const [taskName, setTaskName] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTodo({ id: Date.now(), taskName, completed: false });
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
