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
          <input
            type="checkbox"
            checked={todo.done}
            onChange={(e) => {
             
              const newTodos = [...todoContext.todoList];
              newTodos[index].done = e.target.checked;
              todoContext.setTodos(newTodos);
            }}
          />
          {todo.text}
          <button onClick={(e) => {
            const newTodos = [...todoContext.todoList];
            // splice is to remove an element from an array
            newTodos.splice(index, 1);
            todoContext.setTodos(newTodos);

          }}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
