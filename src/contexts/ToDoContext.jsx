import { createContext, useState, useContext } from "react";

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Buy vegetables",
      completed: false,
    },
    {
      id: 2,
      description: "Pay bills",
      completed: false,
    },
    {
      id: 3,
      description: "Pet the dog",
      completed: false,
    },
  ]);

  // Function to toggle the completed status of a task
  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // const removeTodo = (index) => {
  //   const updatedTodos = todos.filter((_, i) => i !== index);
  //   setTodos(updatedTodos);
  // };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        toggleComplete,
        addTodo,
        removeTodo,
        clearTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
