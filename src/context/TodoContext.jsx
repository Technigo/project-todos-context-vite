import { createContext, useState, useContext } from "react";

const TodoContext = createContext();


export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [itemId, setItemId] = useState(0);
  const [completedTasks, setCompletedTasks] =useState([]);


const toggleTodo = (id, completed) => {
  setTodoList(currentItems => {
    return currentItems.map(item => {
      if (item.id === id) {
        return {...todoList, completed}
      }
    })
  })
}
  
  const deleteTasks =() => {
    setTodoList(todoList.filter(item => item.id !== id))
    
  }
  
  const addTodo = (newItem) => {
    const newId = itemId + 1;
    setItemId(newId);

    setTodoList((currentItems) => {
      return [...currentItems, { id: itemId, text: newItem, completed: false }];
    });
  };

  return (
    <TodoContext.Provider value={{ addTodo, todoList, itemId, setItemId, deleteTasks, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
