import React from 'react';
import moment from 'moment';
import { useTodoContext } from '../context/TodoContext';
import './TodoList.css'; // Import TodoList.css for styling

const TodoList = () => {
  const { state, dispatch, handleToggleAll } = useTodoContext();

  const handleToggle = id => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const handleRemove = id => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  const totalTasks = state.tasks.length;
  const incompleteTasks = state.tasks.filter(task => !task.done).length;

  return (
    <div className="todo-list">
      <h2 className="section-title">How many tasks for me to do today?</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Incomplete Tasks: {incompleteTasks}</p>
      {state.tasks.length === 0 ? (
        <p className="empty-message">To do list is empty</p>
      ) : (
        <>
          <button onClick={handleToggleAll} className="complete-all-button">
            Complete All
          </button>
          <ul className="task-list">
            {state.tasks.map(task => (
              <li key={task.id} className="task-item">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleToggle(task.id)}
                  className="task-checkbox"
                />
                <span style={{ textDecoration: task.done ? 'line-through' : 'none' }} className="task-text">
                  {task.text}
                </span>
                <button onClick={() => handleRemove(task.id)} className="remove-button">
                  Remove
                </button>
                <span className="timestamp">
                  {moment(task.timestamp).format('MMMM Do YYYY, h:mm:ss a')}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TodoList;
