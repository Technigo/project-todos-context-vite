import { useContext, createContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (task) => {
    setToDoList([...toDoList, task]);
  };

  const removeTask = (task) => {
    const indexElement = toDoList.indexOf(task);
    toDoList.splice(indexElement, 1);
    setToDoList([...toDoList]);
  };

  return (
    <TaskContext.Provider value={{ toDoList, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(TaskContext);
};
