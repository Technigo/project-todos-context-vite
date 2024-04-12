import { Heading } from "./components/Heading";
import { NewTask } from "./components/NewTask";
import { ToDoList } from "./components/ToDoList";
import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider } from "./context/ThemeContext";

import "./index.scss";

export const App = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Heading />
        <NewTask />
        <ToDoList />
      </TaskProvider>
    </ThemeProvider>
  );
};
