import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { TaskProvider } from "./context/TaskContext";

export const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Todo App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
