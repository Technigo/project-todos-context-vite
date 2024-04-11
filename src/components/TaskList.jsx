import { Task } from "./Task"
import { useTasks } from "../contexts/TasksContext"

export const TaskList = () => {
  const { tasks } = useTasks()

  return (
    <div className="task-list">
      {tasks
        .filter((task) => task.done === false)
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}
      <div>
        Number of tasks: {tasks.filter((task) => task.done === false).length}
      </div>
    </div>
  );
}
