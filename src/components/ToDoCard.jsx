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
        <label className="checkbox-container">
          <span
            style={{
              textDecoration: toDo.completed ? "line-through" : "none",
              color: toDo.completed ? "#7A7777" : "inherit",
            }}
          >
            {toDo.description}
          </span>
          <input
            type="checkbox"
            checked={toDo.completed}
            onChange={toggleComplete}
          ></input>
          <span
            className="checkmark"
            // style={{
            //   textDecoration: toDo.completed ? "line-through" : "none",
            // }}
          >
            {/* {toDo.description} */}
          </span>
        </label>
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
