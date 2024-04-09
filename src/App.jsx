import "./index.css"
import React from 'react';
import { TodoList } from './components/TodoList.jsx'; 
import { TodoForm } from './components/TodoForm.jsx';
import { TodoProvider } from './contexts/TodoContext.jsx';
import { CheckboxProvider } from './contexts/CheckboxContext.jsx';

  export const App = () => {
    return (
      <TodoProvider>
      <CheckboxProvider>
        <div>
          <h1>Todo App</h1>
          <TodoForm />
          <TodoList />
        </div>
        </CheckboxProvider>
      </TodoProvider>
    );
  };

  export default App;