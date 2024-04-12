import { useTask } from "../context/TaskContext";
import { useTheme } from "../context/ThemeContext";

import "../style/Heading.scss";

export const Heading = () => {
  const { darkMode, changeMode } = useTheme();
  const { totalLength, uncompletedLength } = useTask();

  return (
    <>
      <div
        className={`heading-background ${
          darkMode ? "dark-heading" : "light-heading"
        }`}
      >
        <div className="heading-text">
          <h1>Things to do</h1>
        </div>
        <button className={darkMode ? "dark" : "light"} onClick={changeMode}>
          Light | Dark Mode
        </button>
        <div className={`task-count ${darkMode ? "task-dark" : "task-light"}`}>
          <p>All Tasks: {totalLength}</p>
          <p>Uncompleted Tasks: {uncompletedLength}</p>
        </div>
      </div>
    </>
  );
};
