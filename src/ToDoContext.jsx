import { Children, createContext, useContext, useState } from "react";

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addToDo = (text, date, category) => {
    const newToDo = { text, completed: false, date, category };
    setTodos([...todos, newToDo]);
  };

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
    <ToDoContext.Provider value={{ todos, addToDo, toggleToDo }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDos = () => {
  const context = useContext(ToDoContext);

  return context;
};
