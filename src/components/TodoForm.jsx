import React, { useState } from "react";

import { useTodoContext } from "../context/TodoContext";

import "./TodoForm.css";

const TodoForm = () => {
  const { addTodo } = useTodoContext();
  const [todoText, setTodoText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
    // Clear the error message when the user starts typing
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) {
      setErrorMessage("Field cannot be blank");
      return; // Exit the function if the todoText is blank
    }

    // If the todoText is not blank, add the todo text and reset the form
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <div className="form-input-container">
      <form onSubmit={handleSubmit}>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input
          type="text"
          placeholder="Add Todo..."
          value={todoText}
          onChange={handleInputChange}
          className={errorMessage ? "error-input" : ""}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;

/* this component will allow user to add, remove, and view todos */
