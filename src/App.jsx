import React from "react";

import { TodoList } from  "./TodoList";
import { TodoForm } from "./TodoForm";
import { TodoProvider } from "./TodoContext";
import { TodoCount } from "./TodoCount";

export const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo App</h1>
        <TodoForm />
        <TodoCount />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

