import { createContext, useContext, useState } from "react";
import moment from "moment";

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [ToDo, setToDo] = useState([]);

  // function contexts
  // add task to ToDo state and limit the number of tasks to 5
  const addToDo = newToDo => {
    if (ToDo.length === 5) {
      setToDo(prevValue => [
        ...prevValue.slice(1),
        { task: newToDo, createdAt: moment() },
      ]);
    } else {
      setToDo(prevValue => [
        ...prevValue,
        { task: newToDo, createdAt: moment() },
      ]);
    }
  };
  // empty ToDo state
  const completeAllToDo = () => {
    setToDo([]);
  };
  // remove task from ToDo state
  const removeToDo = todoToRemove => {
    setToDo(ToDo.filter(item => item !== todoToRemove));
  };

  return (
    <ToDoContext.Provider
      value={{ ToDo, addToDo, removeToDo, completeAllToDo }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
export const useToDo = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("useToDo must be used within a ToDoProvider");
  }
  return context;
};
