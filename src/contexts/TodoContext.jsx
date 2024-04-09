import { useState, useContext, createContext, useEffect } from "react";
import tasksJson from "../data/tasks.json";

// Todo context
const TodoContext = createContext();

// Todo provider
export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [local, setLocal] = useState(JSON.parse(localStorage.getItem("To-Do")));

  // Update local storage
  const updateLocal = async () => {
    localStorage.setItem("To-Do", JSON.stringify(tasks));
    console.log("local update", tasks);
  };

  // Add task from state array
  const addTask = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Remove task from state array
  const removeTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
  };

  // Load data from local storage on component mount
  useEffect(() => {
    console.log("savedData", local);
    local ? setTasks(local) : setTasks(tasksJson);
  }, []);

  // When tasks are updated, save to localStorage
  useEffect(() => {
    updateLocal();
    console.log("effect, wtf");
  }, [tasks]);

  // Component
  return (
    <>
      <TodoContext.Provider
        value={{ tasks, setTasks, addTask, removeTask, updateLocal }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};

// custom hook
export const useTodo = () => {
  const context = useContext(TodoContext);
  return context;
};
