import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";
import { TaskProvider } from "./context/TaskContext";

export const App = () => {
  return (
    <TaskProvider>
      <div>
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
