import { Heading } from "./components/Heading";
import { NewTask } from "./components/NewTask";
import { ToDoList } from "./components/ToDoList";
import { TaskProvider } from "./context/TaskContext";

export const App = () => {
  return (
    <TaskProvider>
      <Heading />
      <NewTask />
      <ToDoList />
    </TaskProvider>
  );
};
