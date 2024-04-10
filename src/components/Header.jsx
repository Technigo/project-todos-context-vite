import "./Header.css";
import { useAppData } from "../contexts/AppContext";
import { useTask } from "../contexts/TaskContext";

export const Header = () => {
  const { name, appContent } = useAppData();
  const { taskData, addTask } = useTask();

  return (
    <header>
      <h1>{appContent.heading}</h1>
      <p>Task count: {taskData ? taskData.length : "0"}</p>
    </header>
  );
};
