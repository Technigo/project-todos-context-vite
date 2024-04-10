import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo((prevTodos) => [...prevTodos, newTodo]);
  };

  function removeToDo(id) {
    const removeItem = todo.filter((task) => {
      return task.id !== id;
    });
    setTodo(removeItem);
    console.log(id);
  }

  return (
    <TodoContext.Provider value={{ todo, addTodo, removeToDo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
