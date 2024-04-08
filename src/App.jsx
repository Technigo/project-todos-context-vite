import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import { ToDoProvider } from "./context/ToDoContext";
import { CompleteProvider } from "./context/CompleteContext";
import CompleteList from "./components/CompleteList";

export const App = () => {
  return (
    <>
      <h1>ToDo App</h1>
      <ToDoProvider>
        <ToDoForm />
        <CompleteProvider>
          <h2>ToDo List:</h2>
          <ToDoList />
          <h2>Completed List:</h2>
          <CompleteList />
        </CompleteProvider>
      </ToDoProvider>
    </>
  );
};
