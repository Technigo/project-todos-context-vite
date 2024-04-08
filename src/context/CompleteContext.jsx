import { createContext, useContext, useState } from "react";

const CompleteContext = createContext();

export const CompleteProvider = ({ children }) => {
  const [complete, setComplete] = useState([]);

  return (
    <CompleteContext.Provider value={{ complete }}>
      {children}
    </CompleteContext.Provider>
  );
};

export const useComplete = () => {
  const context = useContext(CompleteContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
