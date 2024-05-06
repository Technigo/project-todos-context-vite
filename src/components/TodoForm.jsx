import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';
import './TodoForm.css'; // Import TodoForm.css for styling

const TodoForm = () => {
  const [task, setTask] = useState('');
  const { dispatch } = useTodoContext();

  const handleSubmit = e => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), text: task, done: false } });
    setTask('');
  };

  return (
    <div className="todo-form">
      <h2 className='title-form'>What is the task today?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder=""
          className="task-input"
        />
        <button type="submit" className="submit-button">New Task</button>
      </form>
    </div>
  );
};

export default TodoForm;
