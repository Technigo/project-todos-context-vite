import { useContext, createContext, useState } from "react";

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const [name, setname] = useState("Test");

  const appContent = {
    heading: "Eggcellent Todo"
  };

  return (
    <AppDataContext.Provider value={{ name, appContent }}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
