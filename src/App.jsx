import { AddToDo } from "./pages/AddToDo";
import { ToDoProvider } from "./contexts/ToDoContext";

export const App = () => {
  return (
    <div>
      <ToDoProvider>
        <AddToDo />
      </ToDoProvider>
    </div>
  );
};
