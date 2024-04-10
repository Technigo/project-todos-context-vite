import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

export const NewTodoForm = () => {
  const [newItem, setNewItem] = useState("");
  const { addTodo, itemId, setItemId } = useTodo();

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(newItem);
    setNewItem("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="new-todo-form">
        <label>
          {" "}
          Add to do:
          <input
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
          />
        </label>
        <button type="submit">Add to list</button>
      </form>
    </>
  );
};
