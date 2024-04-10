import { createContext, useContext, useState } from "react";

const CheckedTaskContext = createContext();

export const CheckedTaskProvider = ({ children }) => {
  const [checkedTask, setCheckedTask] = useState([]);

  return (
    <CheckedTaskContext.Provider value={{ checkedTask }}>
      {children}
    </CheckedTaskContext.Provider>
  );
};

export const useCheckedTask = () => useContext(CheckedTaskContext);
