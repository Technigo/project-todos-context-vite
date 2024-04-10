import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Making a place to store our to-do list data so other child components can easily access it without using props
export const TodoContext = createContext();

// Provider component: It acts like a container for any part of your app that needs to access or modify the to-do list. 
//Think of it as a box that holds the to-do list where other components can look into this box to see the list or add new items to it.
export const TodoProvider = ({ children }) => {
  // Creating a list to hold our tasks. At the beginning, this list has nothing in it.
  const [todos, setTodos] = useState([]);

  // Function to add new tasks to the list
  const addTodo = (todo) => {
    // Use setTodos to update our list of tasks (todos).
    // [...todos] takes all the existing tasks (like "copying" them) and puts them into a new array.
    // [todo] is then added to the end of this new array (like "pasting" a new item at the end).
    setTodos([...todos, todo]);
  };

  // This function changes a task from not done to done and vice versa.
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        // Look for the task by its ID. If we find it, we change its 'completed' status.
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    // Wrapping {children} with <TodoContext.Provider> is a way to make certain values or functions readily accessible to a whole tree of React components
    // value Prop: This is how you pass the data to the context. Whatever you put inside value={{ XX }} is what will be accessible to any component that uses this context.
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
