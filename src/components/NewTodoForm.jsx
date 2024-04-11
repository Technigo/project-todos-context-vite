import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
import "./NewTodoForm.css"

export const NewTodoForm = () => {
  const [newItem, setNewItem] = useState("");
  const { addTodo, itemId, setItemId } = useTodo();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  };

  return (
    <div className="form-container">
      <h1 className="app-name">What To Do Tracker</h1>
      <form onSubmit={handleSubmit} className="add-todo-form">
        <label>
          {" "}
          Add Todo:
          <input
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
          />
        </label>
        <button className="add-todo-button" type="submit">
          Add to list
        </button>
      </form>
    </div>
  );
};
