import ToDoList from "./components/ToDoList";
import { ToDoProvider } from "./context/ToDoContext";
import { CompleteProvider } from "./context/CompleteContext";
import CompleteList from "./components/CompleteList";
import Greeting from './components/Greeting'
import ToDoForm from './components/ToDoForm'
import InspirationCard from "./components/InspirationCard";
import "./styling/app.css";

export const App = () => {
  return (
    <div className="main-container">
      <ToDoProvider>
        <CompleteProvider>
          <div className="card">
          <Greeting />
          <ToDoForm />
          <InspirationCard />
          </div>
          <div className="card">
          <ToDoList />
          <CompleteList />
          </div>
        </CompleteProvider>
      </ToDoProvider>
    </div>
  );
};
