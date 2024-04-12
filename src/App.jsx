import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TaskCount from "./components/TaskCount";
import { TodoProvider } from "./context/TodoContext";

import "./App.css";
import { Header } from "./components/Header";

const App = () => {
  return (
    <TodoProvider>
      <Header />
      <div className="app-container">
        <div className="card-container">
          <div className="card">
            <h2 className="card-title">Task List</h2>
            <TodoForm />
            <TodoList />
          </div>
          <div className="card">
            <h2 className="card-title">All my tasks</h2>
            <div className="task-count" aria-label="Task Count">
              <TaskCount />
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
