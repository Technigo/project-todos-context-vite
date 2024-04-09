import { Heading } from "./components/Heading";
import { NewTask } from "./components/NewTask";
import { ToDoList } from "./components/ToDoList";

export const App = () => {
  return (
    <>
      <Heading />
      <NewTask />
      <ToDoList />
    </>
  );
};
