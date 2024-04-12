import { Task } from "./Task";
import { useTasks } from "../contexts/TasksContext";

export const TasksDoneList = () => {
  const { tasks } = useTasks();

  return (
    <div className="task-list">
      <h3>Finished tasks</h3>
      {tasks
        .filter((task) => task.done === true)
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}
      <div className="count-tasks">
        You have finished {tasks.filter((task) => task.done === true).length}{" "}
        tasks.
      </div>
    </div>
  );
};
