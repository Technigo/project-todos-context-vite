import { useToDoContext } from "../contexts/ToDoContext";
import removeIcon from "../assets/cross-white.svg";
import "./ToDoCard.css";

export const ToDoCard = ({ toDo, toggleComplete }) => {
  const { removeToDo } = useToDoContext();

  const handleRemove = () => {
    removeToDo(toDo.id);
  };
  return (
    <div className="to-do-list-item">
      <li>
        <input
          className="checkbox"
          type="checkbox"
          checked={toDo.completed}
          onChange={toggleComplete}
        />
        <span
          style={{
            textDecoration: toDo.completed ? "line-through" : "none",
          }}
        >
          {toDo.description}
        </span>
        <img
          src={removeIcon}
          alt="Remove"
          className="remove-button"
          onClick={handleRemove}
        />
      </li>
    </div>
  );
};
