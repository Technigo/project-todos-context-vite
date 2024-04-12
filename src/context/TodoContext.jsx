import { createContext, useContext, useState, useEffect } from "react";
import moment from "moment";

const TodoContext = createContext(null);

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
      //Initialize the completed property with a default value of false
      //This approach directly modifies the todo object by adding the completed property with a default value of false. Then, it adds the modified todo object to the todos array.
      createdAt: moment().toISOString(), //Add timestamp
    };
    setTodos([...todos, newTodo]);
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

  const formatCreatedAt = (createdAt) => {
    return moment(createdAt).fromNow();
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleComplete, formatCreatedAt }}>
      {children}
    </TodoContext.Provider>
  );
};


/* export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
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

  useEffect(() => {
    // Sort todos whenever there is a change in the todo list
    const sortedTodos = [...todos].sort((a, b) => {
      if (a.completed && !b.completed) return 1; // completed tasks go to the bottom
      if (!a.completed && b.completed) return -1; // incomplete tasks go to the top
      return 0; // leave the order unchanged if both are completed or incomplete
    });
    setTodos(sortedTodos);
  }, [todos]); // Run this effect whenever todos change

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
}; */