import { useAppData } from "../../context/AppContext";
import { TaskDetail } from "../task-detail/TaskDetail";
import "./TaskBar.css";

export const TaskBar = () => {
  const { darkTheme } = useAppData();

  return (
    <section className="task-container">
      <div
        className={`task-section ${darkTheme ? `light-theme` : `dark-theme`}`}
      >
        <TaskDetail />
      </div>
    </section>
  );
};
