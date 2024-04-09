import { useContext, createContext, useState } from "react";
import moment from "moment";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskData, setTaskData] = useState([
  ]);

  const addTask = (newTask) => {
    if (taskData.length === 0 || taskData === undefined) {
      setTaskData(() => [newTask]);
    } else {
      setTaskData((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const completeTask = (taskData, index) => {
    if (taskData[index].complete === true) {
      setTaskData(taskData[index].complete = false);
    } else {
    setTaskData(taskData[index].complete = true);
    }

    console.log("Completed task?:", taskData);
  };
  console.log(taskData);

  return (
    <TaskContext.Provider value={{ taskData, addTask, completeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
