import React from "react";
import { useToDos } from "../contexts/ToDoContext";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const ListToDo = () => {
  //useToDos from ToDoContext provides "todos" to access the list of tasks and toggleToDo for marking tasks complete
  const { todos, toggleToDo } = useToDos();

  return (
    <div>
      <Link to="/">
        <p>Back to main page!</p>
      </Link>
      <h1>All</h1>

      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                toggleToDo(index);
              }}
            />
            <label>{todo.text}</label>
            <span> - {todo.date}</span>
            <span className="category-tag"> - {todo.category}</span>
          </div>
        ))}
      </div>
      <Link to="/todo/:add_todo">
        <Button />
      </Link>
    </div>
  );
};
