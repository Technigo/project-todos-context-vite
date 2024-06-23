import { useState, useRef } from "react";
import { useTodosContext } from "../context/TodoContext";
import styles from "../styles/TodoItem.css";

import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ itemProp }) => {
  const [editing, setEditing] = useState(false);
  const { handleChange, delTodo, setUpdate } = useTodosContext();
  const editInputRef = useRef(null);

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

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
    <li className={`${styles.item} ${editing ? "" : styles.darkMode}`}>
      <div
        className={styles.content}
        style={{ display: editing ? "none" : "flex" }}
      >
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
          className={styles.checkbox}
        />
        <button onClick={handleEditing} className={styles.button}>
          <AiFillEdit className={styles.icon} />
        </button>
        <button onClick={() => delTodo(itemProp.id)} className={styles.button}>
          <FaTrash className={styles.icon} />
        </button>
        <span
          className={
            itemProp.completed
              ? `${styles.title} ${styles.completed}`
              : styles.title
          }
        >
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        ref={editInputRef}
        defaultValue={itemProp.title}
        className={`${styles.textInput} ${editing ? "" : styles.textContainer}`}
        style={{ display: editing ? "block" : "none" }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
