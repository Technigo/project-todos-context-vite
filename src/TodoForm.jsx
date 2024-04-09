import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import "./TodoForm.css";

export const TodoForm = () => {
  const todoContext = useContext(TodoContext);

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // https://sentry.io/answers/react-spread-operator-three-dots/
    // this is react context.
    todoContext.addTodo(todo);

    // this one clears the text in the input field
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <label className="TodoForm-label">
        Enter a new todo:
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="TodoForm-input"
        />
      </label>
      <button type="submit" className="TodoForm-submit">Add Todo</button>
    </form>
  );
};
