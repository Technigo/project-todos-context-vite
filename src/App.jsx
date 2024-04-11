import { AddTask } from "./components/AddTask";
import { TodoList } from "./components/TodoList";
import { AppDataProvider } from "./contexts/FormContext";

export const App = () => {
  return (
    <>
    <div>Find me in App.jsx!</div>
    <AppDataProvider>
      <AddTask/>
      <TodoList />
    </AppDataProvider>
    </>
    
  )
};
