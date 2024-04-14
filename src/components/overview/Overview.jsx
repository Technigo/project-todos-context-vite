import { useAppData } from "../../context/AppContext";
import { ThemeButton } from "../theme-button/ThemeButton";
import "./Overview.css";

export const Overview = () => {
  const { darkTheme, completeTaskCount, totalTaskCount } = useAppData();

  return (
    <section
      className={`overview-section ${darkTheme ? `light-theme` : `dark-theme`}`}
    >
      <div className="overview-text">
        <h1 className="overview-title">To Do list</h1>
        <p className="comleted-count">
          Completed {completeTaskCount}/{totalTaskCount}
        </p>
      </div>
      <ThemeButton />
    </section>
  );
};
