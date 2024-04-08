import "./CheckButton.css";
import { useTask } from "../contexts/TaskContext";

export const CheckButton = ({ name }) => {
  const { taskData, addTask } = useTask();
  const clicked = () => {
    console.log("Checkbox:", name.index);
  };

  return (
    <form>
      <input
        type="checkbox"
        id={name}
        name="task-check"
        onChange={clicked}
      ></input>
      <label htmlFor={name}>{name}</label>
    </form>
  );
};
