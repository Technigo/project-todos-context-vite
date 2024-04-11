import { useToDoContext } from "../contexts/ToDoContext";
import removeIcon from "../assets/cross-white.svg";
import "./ToDoCard.css";

export const ToDoCard = ({ toDo, toggleComplete }) => {
  const { removeToDo } = useToDoContext();

  const handleRemove = () => {
    removeToDo(toDo.id);
  };
  return (
    <li>
      <input
        type="checkbox"
        checked={toDo.completed}
        onChange={toggleComplete}
      />
      <span
        style={{ textDecoration: toDo.completed ? "line-through" : "none" }}
      >
        {toDo.description}
      </span>
      {/* <button onClick={handleRemove}>Remove</button> */}
      <img
        src={removeIcon}
        alt="Remove"
        className="remove-button"
        onClick={handleRemove}
      />
    </li>
  );
};
