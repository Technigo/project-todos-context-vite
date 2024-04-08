import React, { createContext, useState } from "react";
export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todoList, setTodos] = useState([{ text: "Todo 1" }]);

  return (
    <TodoContext.Provider value={{ todoList, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
