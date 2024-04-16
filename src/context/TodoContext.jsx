import moment from "moment";
import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext(null);

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Load todos from local storage when component mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
      console.log(storedTodos)
    }
  }, []);

  // Save todos to local storage when todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoText) => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
      createdAt: moment().toISOString(),
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const formatCreatedAt = (createdAt) => {
    return moment(createdAt).fromNow();
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleComplete, formatCreatedAt }}
    >
      {children}
    </TodoContext.Provider>
  );
};
