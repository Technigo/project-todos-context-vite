import { useTask } from "../context/TaskContext";

const TaskCount = () => {
  const { tasks } = useTask();

  const totalCount = tasks.length;

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="countContainer">
      <p>
        {completedCount} / {totalCount}
      </p>
    </div>
  );
};

export default TaskCount;
