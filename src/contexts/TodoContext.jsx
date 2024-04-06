import { useState, useContext, createContext } from "react";
import tasksJson from "../data/tasks.json";

// Todo context
const TodoContext = createContext();

// Todo provider
export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksJson);

  const addTask = newTask => {
    console.log("Submit", newTask);
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const removeTask = taskId => {
    console.log("remove", taskId);
    setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
  };

  return (
    <TodoContext.Provider value={{ tasks, setTasks, addTask, removeTask }}>
      {children}
    </TodoContext.Provider>
  );
};

// custom hook
export const useTodo = () => {
  const context = useContext(TodoContext);
  return context;
};
