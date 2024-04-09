import { createContext, useContext, useState } from "react";

const CompleteContext = createContext();

export const CompleteProvider = ({ children }) => {
  const [complete, setComplete] = useState([]);

  const addComplete = newComplete => {
    if (complete.length === 5) {
      setComplete([...complete.slice(1), newComplete]);
    } else {
      setComplete([...complete, newComplete]);
    }
  };

  const removeComplete = completeToRemove => {
    setComplete(complete.filter(item => item !== completeToRemove));
  };

  return (
    <CompleteContext.Provider value={{ complete, addComplete, removeComplete }}>
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
