import "./CheckButton.css";
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
    <form>
      <button id={index} name="remove" onClick={clicked}>
        Rem
      </button>
      <label htmlFor={index}>Remove</label>
    </form>
  );
};
