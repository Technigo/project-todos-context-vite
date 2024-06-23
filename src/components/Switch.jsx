import { useState } from "react";
import MoonIcon from "../components/MoonIcon";
import SunIcon from "../components/SunIcon";
import "../styles/Switch.css";

const Switch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
    const todos = document.querySelector(".todos");
    todos.classList.toggle("dark-mode");
  };

  return (
    <div
      className={`theme-switcher ${isDarkMode ? "dark-mode" : ""}`}
      onClick={toggleTheme}
    >
      <div className="theme-icon">
        {isDarkMode ? <MoonIcon /> : <SunIcon />}
      </div>
    </div>
  );
};

export default Switch;
