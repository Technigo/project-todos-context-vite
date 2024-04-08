import { useContext, createContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskData, setTaskData] = useState([
    {
      title: "Task 1",
      complete: false,
      dateAdded: "now",
    },
  ]);

  const addTask = (newTask) => {
    setTaskData((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <TaskContext.Provider value={{ taskData, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
