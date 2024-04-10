import { useTasks } from "../contexts/TasksContext";

export const TodoList = () => {
  const { tasks } = useTasks();

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div className="task" key={index}>
          <p>{task.task}</p>
        </div>
      ))}
    </div>
  );
};
