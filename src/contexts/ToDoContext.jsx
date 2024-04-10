import { createContext, useState, useContext } from "react";

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      description: "Buy vegetables",
    },
    {
      description: "Pay bills",
    },
  ]);

  // Function to toggle the completed status of a task
  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  /*  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { task, completed: false }]);
      setTask({ description: "" });
    }
  }; */
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // const removeTodo = () => {};

  return (
    <TodoContext.Provider value={{ todos, setTodos, toggleComplete, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
