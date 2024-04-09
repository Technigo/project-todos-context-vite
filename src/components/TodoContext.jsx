import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create Context
export const TodoContext = createContext();

// Provider component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Function to add tasks
  // ... means copy & paste
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Make task to complete
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
