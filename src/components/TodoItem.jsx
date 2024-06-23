import React, { useState, useRef } from "react";
import { useTodosContext } from "../context/TodoContext";
import "../styles/TodoItem.css";

import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ itemProp }) => {
  const [editing, setEditing] = useState(false);
  const { handleChange, delTodo, setUpdate } = useTodosContext();
  const editInputRef = useRef(null); // Referenza per l'input di modifica

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  return (
    <li className="todo-item">
      <div
        className="todo-content"
        style={{ display: editing ? "none" : "flex" }}
      >
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
          className="todo-checkbox"
          id={`checkbox-${itemProp.id}`}
        />
        <label
          htmlFor={`checkbox-${itemProp.id}`}
          className="todo-checkbox-label"
        >
          {itemProp.title}
        </label>
        <button
          onClick={handleEditing}
          className="todo-button"
          aria-label="Edit todo"
        >
          <AiFillEdit className="todo-icon" />
        </button>
        <button
          onClick={() => delTodo(itemProp.id)}
          className="todo-button"
          aria-label="Delete todo"
        >
          <FaTrash className="todo-icon" />
        </button>
      </div>
      <input
        type="text"
        defaultValue={itemProp.title}
        className={`todo-textInput ${editing ? "" : "todo-textContainer"}`}
        style={{ display: editing ? "block" : "none" }}
        onKeyDown={handleUpdatedDone}
        ref={editInputRef}
        aria-label="Edit todo input"
      />
    </li>
  );
};

export default TodoItem;
