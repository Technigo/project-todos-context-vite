import moment from "moment";
import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (task) => {
    const newTask = {
      // Setting the id as the date so it stays unique also if we remove and add new tasks randomly
      id: Date.now(),
      text: task,
      status: false,
      date: moment().format("lll"),
    };
    setToDoList((prevList) => [newTask, ...prevList]);
  };

  const removeTask = (taskId) => {
    setToDoList((prevList) => prevList.filter((task) => task.id !== taskId));
  };

  // Updating if a task is checked or not
  const updatedStatus = (taskId) => {
    setToDoList((prevList) =>
      prevList.map((task) =>
        task.id === taskId ? { ...task, status: !task.status } : task
      )
    );
  };

  let totalLength = toDoList.length;

  let uncompletedTasks = [];

  if (toDoList.length === 0) {
    console.log("No tasks in the list.");
  } else {
    uncompletedTasks = toDoList.filter((task) => !task.status);
  }

  let uncompletedLength = uncompletedTasks.length;

  return (
    <TaskContext.Provider
      value={{
        toDoList,
        addTask,
        removeTask,
        updatedStatus,
        totalLength,
        uncompletedLength,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(TaskContext);
};
