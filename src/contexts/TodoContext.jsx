import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  /* const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todo");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]); */

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

  const clearList = () => {
    setTodo([]);
  };

  return (
    <TodoContext.Provider value={{ todo, addTodo, removeToDo, clearList }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
