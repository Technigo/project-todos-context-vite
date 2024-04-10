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
  const [tasksDone, setTasksDone] = useState([
    {
      id: null,
      task: "",
    },
  ]);

  const addTask = (newTask) => {
    setTasks((prevTask) => [...prevTask, newTask]);
  };

  const deleteTask = (taskToDelete) => {
    const newTasks = tasks.filter((task) => task.task !== taskToDelete);
    setTasks(newTasks);
  };

  const addTaskDone = (newTaskDone) => {
    setTasksDone((prevTasksDone) => [...prevTasksDone, newTaskDone]);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, tasksDone, addTask, deleteTask, addTaskDone }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
