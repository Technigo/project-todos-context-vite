import { TaskDone } from "./TaskDone"
import { useTasks } from "../contexts/TasksContext"

export const TasksDoneList = () => {
  const { tasksDone } = useTasks();

  return (
    <div className="task-list">
      <h3>Finished tasks</h3>
      {tasksDone.map((task) => (
        <TaskDone key={task.id} task={task} />
      ))}
      <div>Finished tasks: {tasksDone.length}</div>
    </div>
  );
}
