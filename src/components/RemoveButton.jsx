import "./RemoveButton.css";
import { useTask } from "../contexts/TaskContext";

export const RemoveButton = ({ todo }) => {
  const { removeTask } = useTask();
 
  const clicked = (e) => {
    e.preventDefault();

    //remove task from taskData
    removeTask(todo.id);
  };

  return (
    <button
      className="remove-button"
      id={todo.id}
      name="remove"
      onClick={clicked}
    >
      <img src="src/assets/trash-can.svg" />
    </button>
  );
};
