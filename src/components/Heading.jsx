import "../style/Heading.scss";
import { FaClipboardList } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export const Heading = () => {
  const { darkMode, changeMode } = useTheme();

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
      </div>
    </>
  );
};
