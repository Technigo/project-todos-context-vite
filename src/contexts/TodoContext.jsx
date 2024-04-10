import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [todoItems, setTodoItems] = useState([]);
  

  const addTodo = (newTodo) => {
    setTodo((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (newTodo) => {
    const updatedList = todoItems
      .map((todo) =>
        todo.id === newTodo ? { ...task, quantity: task.quantitiy - 1 } : task
      )
      .filter((task) => task.quantity > 0);

    setTodoItems(updatedList);
  };



  return (
    <TodoContext.Provider value={{ todo, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

