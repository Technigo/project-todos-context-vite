import React from "react";
import { useToDos } from "../contexts/ToDoContext";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import moment from "moment";

export const ListToDo = () => {
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

            <span> - {moment(todo.time).format("hh:mm MMMM YY")}</span>
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
