import React, { useState } from "react";
import { useTodosContext } from "../context/TodoContext";
import { FaPlusCircle } from "react-icons/fa";
import "../styles/InputTodo.css";

const InputTodo = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const { addTodoItem } = useTodosContext();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle("");
      setMessage("");
    } else {
      setMessage("Please add item.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="form-container"
        aria-label="Todo form"
      >
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
          className="input-text"
          aria-label="Todo input"
        />
        <button className="input-submit" aria-label="Add todo">
          <FaPlusCircle className="plusIcon" />
        </button>
      </form>
      {message && (
        <span className="submit-warning" role="alert">
          {message}
        </span>
      )}
    </>
  );
};

export default InputTodo;
