import { createContext, useContext, useState } from "react";

const CompleteContext = createContext();

export const CompleteProvider = ({ children }) => {
  const [complete, setComplete] = useState([]);

  // function contexts
  // add task to complete state
  const addComplete = newComplete => {
    if (complete.length === 5) {
      setComplete([...complete.slice(1), newComplete]);
    } else {
      setComplete([...complete, newComplete]);
    }
  };

  // add all todos to complete state
  const addAllComplete = taskList => {
    setComplete([...complete, ...taskList].slice(-5));
  };
  // remove the task from complete state
  const removeComplete = completeToRemove => {
    setComplete(complete.filter(item => item !== completeToRemove));
  };
  // empty complete state
  const removeAllComplete = () => {
    setComplete([]);
  };

  return (
    <CompleteContext.Provider
      value={{
        complete,
        addComplete,
        removeComplete,
        addAllComplete,
        removeAllComplete,
      }}
    >
      {children}
    </CompleteContext.Provider>
  );
};

export const useComplete = () => {
  const context = useContext(CompleteContext);
  if (!context) {
    throw new Error("useComplete must be used within a CompleteProvider");
  }
  return context;
};
