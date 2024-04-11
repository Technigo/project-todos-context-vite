import { useContext, createContext, useState } from "react";
import moment from "moment";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskData, setTaskData] = useState([]);

  const addTask = (newTask) => {
    if (taskData.length === 0 || taskData === undefined) {
      setTaskData(() => [newTask]);
    } else {
      setTaskData((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const completeTask = (taskId, index) => {
    const indexCheck = (task) => task.id === taskId;
    const indexToComplete = taskData.findIndex(indexCheck);
    const updateTasks = [...taskData];
    const currentState = updateTasks[indexToComplete].complete;
    updateTasks[indexToComplete].complete = !currentState;

    setTaskData(updateTasks);
  };

  const removeTask = (taskId) => {
    const indexCheck = (task) => task.id === taskId;
    const indexToRemove = taskData.findIndex(indexCheck);
    const updateTasks = [...taskData];
    updateTasks.splice([indexToRemove], 1);

    setTaskData(updateTasks);
  };

  const clearTasks = () => {
    setTaskData([])
  }

  return (
    <TaskContext.Provider
      value={{ taskData, addTask, completeTask, removeTask, clearTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
