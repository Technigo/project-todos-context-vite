import { createContext, useContext, useState } from "react";

const CheckboxContext = createContext();

export const CheckboxProvider = ({ children }) => {
  const [tasks, setTasks] = useState(false);
 

  const toggleChecked = () => {
    setTasks(tasks ? false : true);
  };

  const removeChecked = () => {};

  return (
    <CheckboxContext.Provider
      value={{ tasks, toggleChecked, removeChecked }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckbox = () => useContext(CheckboxContext);
