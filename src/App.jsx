import { CheckButton } from "./components/CheckButton";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { TaskInput } from "./components/TaskInput";
import { AppDataProvider } from "./themes/AppTheme";
import { TaskProvider } from "./themes/TaskTheme";

export const App = () => {
  return (
    <AppDataProvider>
      <TaskProvider>
        <div>
          <Header />
          <div className="input">
            <TaskInput />
          </div>
          <div className="task-list">
            <Task />
          </div>
        </div>
      </TaskProvider>
    </AppDataProvider>
  );
};
