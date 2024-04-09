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

  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => {
    if (darkMode === false) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  return (
    <TaskContext.Provider
      value={{ toDoList, addTask, darkMode, changeMode, removeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(TaskContext);
};
