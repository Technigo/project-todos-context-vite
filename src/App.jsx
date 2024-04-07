import React from "react";

import { TodoList } from  "./TodoList";
import { TodoForm } from "./TodoForm";
import { TodoProvider } from "./TodoContext";

export const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

