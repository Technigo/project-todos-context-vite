import { useContext, createContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (task) => {
    setToDoList([...toDoList, task]);
  };

  return (
    <TaskContext.Provider value={{ toDoList, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(TaskContext);
};
