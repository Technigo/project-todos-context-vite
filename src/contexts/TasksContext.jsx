import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Buy milk",
      done: false,
    },
    {
      id: 2,
      task: "Get good!",
      done: true,
    },
  ]);
  const [nextId, setNextId] = useState(3);

  const addTask = (newTask) => {
    setTasks((prevTask) => [...prevTask, newTask]);
    setNextId(nextId + 1);
  };

  const deleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task.id !== taskToDelete);
    setTasks(newTasks);
  };

  const toggleChecked = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, nextId, addTask, deleteTask, toggleChecked }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
