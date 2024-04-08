import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import { ToDoProvider } from "./context/ToDoContext";
import { CompleteProvider } from "./context/CompleteContext";

export const App = () => {
  return (
    <ToDoProvider>
      <CompleteProvider>
        <ToDoList />
      </CompleteProvider>
      <ToDoForm />
    </ToDoProvider>
  );
};
