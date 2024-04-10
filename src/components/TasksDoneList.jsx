import { Task } from "./Task";
import { useTasks } from "../contexts/TasksContext";

export const TasksDoneList = () => {
  const { tasksDone } = useTasks();

  return (
    <div className="task-list">
      {tasksDone.map((task) => (
        <div key={task.id} className="task">
          <input type="checkbox" />
          <p>{task.task}</p>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};
