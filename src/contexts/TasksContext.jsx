import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Buy bread",
    },
    {
      id: 2,
      task: "Book dentistapp.",
    },
  ]);

  const addTask = (newTask) => {
    setTasks((prevTask) => [...prevTask, newTask]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
