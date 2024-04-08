import { useContext, createContext, useState } from "react";
import moment from "moment";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskData, setTaskData] = useState([{
    title: "Title",
    complete: false,
    date: moment().calendar()
  }
  ]);

  const addTask = (newTask) => {
    if (taskData.length === 0 || taskData === undefined) {
      setTaskData(newTask);
    } else {
      setTaskData((prevTasks) => [...prevTasks, newTask]);
    }
  };
  console.log(taskData);

  return (
    <TaskContext.Provider value={{ taskData, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
