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

  const toggleChecked = (taskToToggle) => {
    /*Find the index of the task to toggle.*/
    const changedTask = tasks.map((task) => task.id).indexOf(taskToToggle);
    /*Find out whether the task is done or not.*/
    const doneStatus = tasks[changedTask].done;
    /*Make a copy of current task-list.*/
    const updatedList = tasks;
    /*See if the task is found in "tasks".*/
    const targetTask = updatedList.find((task) => task.id === taskToToggle);
    /*If the task is found, go to the new list, index of the task to toggle, attribute "done" and change it to what it wasn't before.*/
    if (targetTask) {
      updatedList[changedTask].done = doneStatus ? false : true;
    }
    /*Use the old task list to the updated.*/
    setTasks(updatedList);
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
