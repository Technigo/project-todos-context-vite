import { createContext, useState, useContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [itemId, setItemId] = useState();

  const addTodo = (newItem) => {
    setTodoList([...todoList, newItem]);
  };

  return (
    <TodoContext.Provider value={{ addTodo, todoList }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
