import React, { createContext, useState } from "react";
export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todoList, setTodos] = useState(["Todo 1", "Todo 2", "Todo 3"]);

  return (
    <TodoContext.Provider value={{ todoList, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
