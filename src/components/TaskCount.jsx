import { useEffect } from "react";
import { useTodoContext } from "../context/TodoContext";
import "./TaskCount.css";

const TaskCount = () => {
  const { todos } = useTodoContext();

  useEffect(() => {
    // No need to store completed tasks separately, we'll calculate it directly
  }, [todos]);

  const totalTasks = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="task-count" aria-label="Task Count">
      <p>
        {totalTasks === 0 ? (
          "No tasks to do yet" // Display "No tasks created yet" if no tasks
        ) : (
          `${completedCount} task${completedCount !== 1 ? "s" : ""} completed of ${totalTasks}` // Pluralize "task" based on count
        )}
      </p>
    </div>
  );
};

export default TaskCount;
