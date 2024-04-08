import { createContext, useContext, useState } from "react";

const CompleteContext = createContext();

export const CompleteProvider = ({ children }) => {
  const [complete, setComplete] = useState([]);

  const addComplete = newComplete => {
    setComplete(prevValue => [
      ...prevValue,
      {
        task: newComplete,
      },
    ]);
  };

  const removeComplete = completeToRemove => {
    setComplete(complete.filter(item => item.task !== completeToRemove));
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
