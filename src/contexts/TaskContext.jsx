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

  const completeTask = (taskId,index) => {
    const updateTasks = [...taskData];
    const currentState = updateTasks[index].complete;
    updateTasks[index].complete = !currentState;

    setTaskData(updateTasks);
  };

  const removeTask = (taskId) => {
    console.log(taskId);
    const indexCheck = (task) => task.id === taskId;
    const indexToRemove = taskData.findIndex(indexCheck)
    console.log("Remove task:", indexToRemove);
    const updateTasks = [...taskData];
    updateTasks.splice([indexToRemove], 1);
    
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
