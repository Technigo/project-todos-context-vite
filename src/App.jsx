import { TodoForm } from "./components/TodoForm";
import { AppDataProvider } from "./contexts/FormContext";

export const App = () => {
  return (
    <>
    <div>Find me in App.jsx!</div>
    <AppDataProvider>
      <TodoForm />
    </AppDataProvider>
    </>
    
  )
};
