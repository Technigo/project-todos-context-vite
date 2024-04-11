import { useTask } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { toggleTask, removeTask } = useTask();

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleRemove = () => {
    removeTask(task.id);
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TaskItem;
