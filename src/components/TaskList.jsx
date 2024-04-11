import { Task } from "./Task";
import { useTasks } from "../contexts/TasksContext";

export const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div className="task-list">
      <h3>Task list</h3>
      {tasks
        .filter((task) => task.done === false)
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}
      <div className="count-tasks">
        You have {tasks.filter((task) => task.done === false).length} tasks
      </div>
    </div>
  );
};
