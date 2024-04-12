import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Setting the Theme
  const changeMode = () => {
    if (darkMode === false) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  return (
    <ThemeContext.Provider value={{ changeMode, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
