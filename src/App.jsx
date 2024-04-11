import { AddToDo } from "./pages/AddToDo";
import { ToDoProvider } from "./contexts/ToDoContext";
import { ListToDo } from "./pages/ListToDo";

export const App = () => {
  return (
    <div>
      <ToDoProvider>
        <AddToDo />
        <ListToDo />
      </ToDoProvider>
    </div>
  );
};
