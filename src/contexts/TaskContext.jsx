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

  const completeTask = (taskIndex) => {
    const updateTasks = [...taskData];
    const currentState = updateTasks[taskIndex].complete;
    updateTasks[taskIndex].complete = !currentState;

    setTaskData(updateTasks);
  };

  const removeTask = (taskIndex) => {
    const updateTasks = [...taskData];
    updateTasks.splice([taskIndex], 1);
    
    setTaskData(updateTasks);
  };

  return (
    <TaskContext.Provider
      value={{ taskData, addTask, completeTask, removeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
