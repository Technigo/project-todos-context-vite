import "./Header.css";
import { useAppData } from "../contexts/AppContext";
import { useTask } from "../contexts/TaskContext";

export const Header = () => {
  const { name, appContent } = useAppData();
  const { taskData, addTask } = useTask();

  const completedTasks = taskData.filter((task) => task.complete);

  return (
    <header>
      <div className="title">
        <h1>{appContent.heading}</h1>
        <img src="src/assets/baby-chick.svg" />
      </div>
      <p>
        Eggs cracked:{" "}
        {taskData ? `${completedTasks.length} / ${taskData.length} ` : "0"}
      </p>
    </header>
  );
};
