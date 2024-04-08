import "./Header.css";
import { useAppData } from "../themes/AppTheme";
import { useTask } from "../themes/TaskTheme";

export const Header = () => {
    const { name, appContent } = useAppData();
    const { taskData, addTask } = useTask();

  console.log(name, appContent);

  return (
    <header>
          <h1>{appContent.heading}</h1>
          <p>Task count: {taskData.length}</p>
    </header>
  );
};
