import { useAppData } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { Overview } from "../../components/overview/Overview";
import { TaskBar } from "../../components/task-bar/TaskBar";
import "./HomePage.css";

export const HomePage = () => {
  const { darkTheme } = useAppData();

  return (
    <main>
      <Overview />
      <TaskBar />
      <section
        className={`tool-bar ${darkTheme ? `light-theme` : `dark-theme`}`}
      >
        <Link
          className={`link-add-new-task ${
            darkTheme ? `light-theme` : `dark-theme`
          }`}
          to="/task/add"
        >
          +
        </Link>
      </section>
    </main>
  );
};
