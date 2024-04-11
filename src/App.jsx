import ToDoList from "./components/ToDoList";
import { ToDoProvider } from "./context/ToDoContext";
import { CompleteProvider } from "./context/CompleteContext";
import CompleteList from "./components/CompleteList";
import ToDoForm from "./components/ToDoForm";
import InspirationCard from "./components/InspirationCard";
import "./styling/app.css";

export const App = () => {
  return (
    <div className="main-container">
      <ToDoProvider>
        <CompleteProvider>
          <div className="card">
            <ToDoForm />
            <ToDoList />
          </div>
          <div className="card">
            <InspirationCard />
            <CompleteList />
          </div>
        </CompleteProvider>
      </ToDoProvider>
    </div>
  );
};
