import { useState } from "react";
import "./TodoList.css";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Sample Todo", completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState("");

  // Function to handle adding new todo item
  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = {
        id: Math.random(),
        text: newTodoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText(""); // Clear input field after adding todo
    }
  };

  // Function to handle toggling completion of todo item
  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h2>To-Do List</h2>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
          </div>
        ))}
      </div>
      <div className="add-todo">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter your next to-do task here"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
};
