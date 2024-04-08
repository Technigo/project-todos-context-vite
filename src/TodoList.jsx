import { useContext } from "react";
import { TodoContext } from "./TodoContext";
export const TodoList = () => {
  const todoContext = useContext(TodoContext);
  console.log(todoContext);
  return (
    // here we are rendering a list dynamically (it can change)
    <ul>
      {todoContext.todoList.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" /> 
          {todo.text}</li>
      ))}
    </ul>
  );
};
