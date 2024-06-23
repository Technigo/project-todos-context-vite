import React, { createContext, useState, useContext } from "react";

const TodoContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Read a book", completed: true },
    { id: 3, title: "Exercise for 30 minutes", completed: false },
    { id: 4, title: "Write a blog post", completed: false },
    { id: 5, title: "Call Mom", completed: true },
  ]);

  const addTodoItem = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const delTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: updatedTitle } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodoItem, handleChange, delTodo, setUpdate }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodosContext = () => useContext(TodoContext);
