import "./ClearButton.css";

import { useTask } from "../contexts/TaskContext";

export const ClearButton = ({ todo, index }) => {
  const { clearTasks } = useTask();

  const clicked = (e) => {
    e.preventDefault();

    if (confirm("Are you sure?")) {
      clearTasks();
    }
  };


  return (
    <button
      className="clear-button"
      id="remove-all"
      name="remove-all"
      onClick={clicked}
    >
      Clear all
      <img src="src/assets/trash-can.svg" />
    </button>
  );
};
