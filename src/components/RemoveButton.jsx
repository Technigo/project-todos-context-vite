import "./RemoveButton.css";
import { useTask } from "../contexts/TaskContext";

export const RemoveButton = ({ todo, index }) => {
  const { taskData, addTask, completeTask, removeTask } = useTask();
 
  console.log(todo)
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
