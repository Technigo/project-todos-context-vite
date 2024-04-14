import { createContext, useContext, useState, useEffect } from "react";

const AppData = createContext();

export const AppDataProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [completeTask, setCompleteTask] = useState(false);
  const [completeTaskCount, setCompleteTaskCount] = useState(0);
  const [totalTaskCount, setTotalTaskCount] = useState(0);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    updatedTasks.sort((a, b) => new Date(a.fullDate) - new Date(b.fullDate));
    setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const removeTask = (taskToRemove) => {
    const updatedTasks = tasks.filter((task) => task !== taskToRemove);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleComplete = (taskToToggle) => {
    const updatedTasks = tasks.map((task) =>
      task === taskToToggle ? { ...task, complete: !task.complete } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleCompletedTaskCount = () => {
    const taskCount = tasks.filter((task) => task.complete).length;
    setCompleteTaskCount(taskCount);
  };

  const handleTotalTaskCount = () => {
    const taskCount = tasks.length;
    setTotalTaskCount(taskCount);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    handleCompletedTaskCount();
    handleTotalTaskCount();
  }, [tasks]);

  return (
    <AppData.Provider
      value={{
        darkTheme,
        toggleTheme,
        addTask,
        removeTask,
        tasks,
        completeTask,
        setCompleteTask,
        toggleComplete,
        completeTaskCount,
        totalTaskCount,
      }}
    >
      {children}
    </AppData.Provider>
  );
};

export const useAppData = () => {
  const context = useContext(AppData);
  return context;
};
