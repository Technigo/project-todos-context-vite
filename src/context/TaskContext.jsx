import { useContext, createContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);
  /*   const [taskStatus, setTaskStatus] = useState(
    new Array(toDoList.length).fill(false)
  ); */

  /*  const addTask = (task) => {
    setToDoList([...toDoList, task]);
  }; */

  const addTask = (task) => {
    const newTask = { id: Date.now(), text: task, status: false };
    setToDoList((prevList) => [...prevList, newTask]);
  };

  /* const removeTask = (task) => {
    const indexElement = toDoList.indexOf(task);
    toDoList.splice(indexElement, 1);
    setToDoList([...toDoList]);
  }; */

  const removeTask = (taskId) => {
    setToDoList((prevList) => prevList.filter((task) => task.id !== taskId));
  };

  /* const updatedStatus = (task) => {
    const indexElement = toDoList.indexOf(task);
    const updatedTaskStatus = [...taskStatus]; // Create a copy of the taskStatus array
    updatedTaskStatus[indexElement] = !updatedTaskStatus[indexElement]; // Toggle the status
    setTaskStatus(updatedTaskStatus);
  }; */

  /* const updatedStatus = (taskId) => {
    const updatedTaskList = toDoList.map((task) =>
      task.id === taskId ? { ...task, status: !task.status } : task
    );
    setToDoList(updatedTaskList);
  }; */

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
