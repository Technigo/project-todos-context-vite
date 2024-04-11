import { Task } from "./Task";
import { useTasks } from "../contexts/TasksContext";
import "./TaskList.css"

export const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}
