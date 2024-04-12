import { useEffect, useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import "./TaskCount.css";

const TaskCount = () => {
  const { todos } = useTodoContext();
  /*   const [completedCount, setCompletedCount] = useState(0); */
  const [incompleteCount, setIncompleteCount] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const completed = todos.filter((todo) => todo.completed);
    const incomplete = todos.filter((todo) => !todo.completed).length;
    setCompletedTasks(completed);
    setIncompleteCount(incomplete);
  }, [todos]);

  return (
    <div className="task-count" aria-label="Task Count">
      <p>Incomplete: {incompleteCount}</p>
      <hr />
      <p>Completed: {completedTasks.lenght}</p>
      <ul className="completed-tasks">
        {completedTasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskCount;
