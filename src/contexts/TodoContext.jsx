import { useState, useContext, createContext, useEffect } from "react";
import tasksJson from "../data/tasks.json";

// Todo context
const TodoContext = createContext();

// Todo provider
export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    localStorage["To-Do"] && JSON.parse(localStorage["To-Do"]).length > 0
      ? JSON.parse(localStorage["To-Do"])
      : tasksJson
  );
  const [local, setLocal] = useState(JSON.parse(localStorage.getItem("To-Do")));

  // Update local storage
  const updateLocal = async () => {
    localStorage.setItem("To-Do", JSON.stringify(tasks));
  };

  // Sort tasks by duedate
  const sortTasks = taskArray =>
    taskArray.sort((a, b) => new Date(a.duedate) - new Date(b.duedate));

  // Add task from state array
  const addTask = newTask => {
    setTasks(prevTasks => sortTasks([...prevTasks, newTask]));
  };

  // Remove task from state array
  const removeTask = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
  };

  // Sort tasks on component mount
  useEffect(() => {
    setTasks(sortTasks(tasks));
  }, []);

  // When tasks are updated, save to localStorage
  useEffect(() => {
    updateLocal();
  }, [tasks]);

  // Component
  return (
    <TodoContext.Provider
      value={{ tasks, setTasks, addTask, removeTask, updateLocal }}>
      {children}
    </TodoContext.Provider>
  );
};

// custom hook
export const useTodo = () => {
  const context = useContext(TodoContext);
  return context;
};
