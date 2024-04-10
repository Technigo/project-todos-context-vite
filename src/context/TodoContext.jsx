import { createContext, useState, useContext } from "react";

const TodoContext = createContext(null);

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /* here we add a 'toggleComplete' function that toggles the 'completed' property when called.  We update the todo list state using setTodos and map over the existing todos to find the todo with the given id and toggle its completed property.*/

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};
