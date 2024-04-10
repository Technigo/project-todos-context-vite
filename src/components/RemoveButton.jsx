import "./RemoveButton.css";
import { useTask } from "../contexts/TaskContext";

export const RemoveButton = ({ todo, index }) => {
  const { taskData, addTask, completeTask, removeTask } = useTask();
  console.log("Remove button: ", index);

  const clicked = (e) => {
    e.preventDefault();

    //remove task from taskData
    removeTask(index);
  };

  return (
    <button
      className="remove-button"
      id={index}
      name="remove"
      onClick={clicked}
    >
      <img src="src/assets/trash-can.svg" />
    </button>
  );
};
