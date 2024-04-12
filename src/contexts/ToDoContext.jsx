import { createContext, useContext, useState, useEffect } from "react";

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const categories = [
    { value: "work", label: "Work" },
    { value: "home", label: "Home" },
    { value: "shopping", label: "Shopping" },
    { value: "study", label: "Study" },
    { value: "travel", label: "Travel" },
  ];
  //function to add a todo with text, date, category.
  //creates a new todo objecte with additional properties (completed, time and completedAt)
  const addToDo = (text, date, category) => {
    const newToDo = {
      text,
      completed: false,
      date, //pass chosen date
      category,
      time: new Date(),
    };
    setTodos([...todos, newToDo]);
  };

  //function to iterate through the todos list using map. Creates a new object with completed state flipped and sets completedAt if the task is marked complete (check?? not showing)
  const toggleToDo = (index) => {
    const newToDo = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          completed: !todo.completed,
          completedAt: !todo.completed ? new Date().toISOString() : null,
        };
      }
      return todo;
    });
    setTodos(newToDo);
  };

  return (
    <ToDoContext.Provider value={{ todos, addToDo, toggleToDo, categories }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDos = () => {
  const context = useContext(ToDoContext);

  return context;
};
