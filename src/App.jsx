import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { TodoProvider } from "./context/TodoContext";
import "./App.css";

const App = () => {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Todo App</h1>
        <div className="card">
          <h2 className="card-title">Task Count</h2>
          <div className="task-count" aria-label="Task Count">
            {/* Display task count here */}
          </div>
          <div className="card">
            <h2 className="card-title">Task List</h2>
            <TodoForm />
            <ul className="todo-list" aria-label="Task List">
              <TodoList />
            </ul>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
