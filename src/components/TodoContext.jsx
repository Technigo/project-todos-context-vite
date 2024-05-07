import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text }]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};