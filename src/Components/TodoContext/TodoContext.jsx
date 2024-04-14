import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [value, setValue] = useState("Initial Value");

  return (
    <TodoContext.Provider value={{ value, setValue }}>
      {children}
    </TodoContext.Provider>
  );
};
