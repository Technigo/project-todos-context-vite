import { Task } from "./Task";
import { useTasks } from "../contexts/TasksContext";

export const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div className="task-list">
      {tasks.map((task, id) => (
        <Task key={id} task={task} />
      ))}
    </div>
  );
};
