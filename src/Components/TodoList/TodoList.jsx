import { useState } from "react";
import "./TodoList.css";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Create a To-Do List", completed: true },
    {
      id: 2,
      text: "Exercise at least three times this week",
      completed: false,
    },
    { id: 3, text: "Finish weekly project", completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState("");
  const [maxTasksReached, setMaxTasksReached] = useState(false);

  // Function to handle adding new todo item
  const handleAddTodo = () => {
    if (newTodoText.trim() !== "" && todos.length < 15) {
      const newTodo = {
        id: Math.random(),
        text: newTodoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText("");
    } else {
      setMaxTasksReached(true);
    }
  };

  // Function to handle toggling completion of todo item
  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to handle removing todo item
  const handleRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Function to handle change in input field
  const handleChange = (e) => {
    if (e.target.value.length <= 50) {
      setNewTodoText(e.target.value);
      setMaxTasksReached(false);
    }
  };

  // Function to get count of all tasks
  const getAllTasksCount = () => todos.length;

  // Function to get count of uncompleted tasks
  const getUncompletedTasksCount = () =>
    todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h2>To-Do List</h2>
      </div>
      <div className="todo-count">
        <p>
          Total: {getAllTasksCount()} | Uncompleted:{" "}
          {getUncompletedTasksCount()}
        </p>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              <span
                className={`todo-text ${todo.completed ? "completed" : ""}`}
              >
                {todo.text}
              </span>
            </label>
            <button
              className="remove-button"
              onClick={() => handleRemoveTodo(todo.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="add-todo">
        <label htmlFor="newTodo"></label>
        <input
          type="text"
          id="newTodo"
          value={newTodoText}
          onChange={handleChange}
          maxLength={40}
          placeholder="Enter your next to-do task here"
        />
        {maxTasksReached && (
          <p className="max-tasks-reached">
            Maximum number of active tasks reached!
          </p>
        )}
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
};
