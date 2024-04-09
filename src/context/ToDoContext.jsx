import { createContext, useContext, useState } from "react";

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [ToDo, setToDo] = useState([]);

  const addToDo = newToDo => {
    if (ToDo.length === 5) {
      setToDo(prevValue => [...prevValue.slice(1), { task: newToDo }]);
    } else {
      setToDo(prevValue => [...prevValue, { task: newToDo }]);
    }
  };
  const removeToDo = todoToRemove => {
    setToDo(ToDo.filter(item => item !== todoToRemove));
  };

  return (
    <ToDoContext.Provider value={{ ToDo, addToDo, removeToDo }}>
      {children}
    </ToDoContext.Provider>
  );
};
export const useToDo = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
