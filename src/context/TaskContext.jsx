import { useContext, createContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), text: task, status: false };
    setToDoList((prevList) => [newTask, ...prevList]);
  };

  const removeTask = (taskId) => {
    setToDoList((prevList) => prevList.filter((task) => task.id !== taskId));
  };

  const updatedStatus = (taskId) => {
    setToDoList((prevList) =>
      prevList.map((task) =>
        task.id === taskId ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ toDoList, addTask, removeTask, updatedStatus }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(TaskContext);
};
