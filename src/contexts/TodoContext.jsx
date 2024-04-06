import { useState, useContext, createContext } from "react";
import tasksJson from "../data/tasks.json";

// Todo context
const TodoContext = createContext();

// Todo provider
export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksJson);

  const addTask = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <TodoContext.Provider value={{ tasks, setTasks, addTask }}>
      {children}
    </TodoContext.Provider>
  );
};

// custom hook
export const useTodo = () => {
  const context = useContext(TodoContext);
  return context;
};
