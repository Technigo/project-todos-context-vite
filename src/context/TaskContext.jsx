import moment from "moment";
import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (task) => {
    const newTask = {
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

  const updatedStatus = (taskId) => {
    setToDoList((prevList) =>
      prevList.map((task) =>
        task.id === taskId ? { ...task, status: !task.status } : task
      )
    );
  };

  let totalLength = toDoList.length;
  console.log(totalLength);

  let uncompletedTasks = [];

  if (toDoList.length === 0) {
    console.log("No tasks in the list.");
  } else {
    uncompletedTasks = toDoList.filter((task) => !task.status);
  }

  console.log(uncompletedTasks);

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
