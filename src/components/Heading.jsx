import { FaClipboardList } from "react-icons/fa";

import { useTask } from "../context/TaskContext";
import { useTheme } from "../context/ThemeContext";

import "../style/Heading.scss";

export const Heading = () => {
  const { darkMode, changeMode } = useTheme();
  const { totalLength, uncompletedLength } = useTask();

  console.log(totalLength);

  return (
    <>
      <div
        className={`heading-background ${
          darkMode ? "dark-heading" : "light-heading"
        }`}
      >
        <div className="heading-text">
          <FaClipboardList className="checklist" />
          <h1>Your ToDo List</h1>
          <FaClipboardList className="checklist" />
        </div>
        <button className={darkMode ? "dark" : "light"} onClick={changeMode}>
          Swich Theme: Light/Dark
        </button>
        <div className={`task-count ${darkMode ? "task-dark" : "task-light"}`}>
          <p>All Tasks: {totalLength}</p>
          <p>Uncompleted Tasks: {uncompletedLength}</p>
        </div>
      </div>
    </>
  );
};
