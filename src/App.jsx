import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";
import TodayDate from "./components/TodayDate";
import { TaskProvider } from "./context/TaskContext";

export const App = () => {
  return (
    <TaskProvider>
      <div>
        <Header />
        <TodayDate />
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
