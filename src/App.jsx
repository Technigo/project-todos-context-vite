import { AddToDo } from "./pages/AddToDo";
import { ToDoProvider } from "./ToDoContext";

export const App = () => {
  return (
    <div>
      <ToDoProvider>
        <AddToDo />
      </ToDoProvider>
    </div>
  );
};
