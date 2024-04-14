import { useAppData } from "../../context/AppContext";
import "./TaskDetail.css";

export const TaskDetail = () => {
  const { tasks, removeTask, toggleComplete, darkTheme } = useAppData();

  const handleRemoveTask = (task) => {
    removeTask(task);
  };

  const handleToggleComplete = (task) => {
    toggleComplete(task);
  };

  return (
    <>
      <h2 className="task-bar-title">Tasks</h2>
      {tasks.map((task, index) => (
        <article key={index} className="task-detail">
          <div className="task-main-info">
            <input
              className={`task-complete-btn ${
                darkTheme ? `light-theme` : `dark-theme`
              }`}
              type="checkbox"
              checked={task.complete}
              onChange={() => handleToggleComplete(task)}
            />
            <h3 className="task-description">{task.description}</h3>
          </div>
          <div className="task-time">
            <p
              className={`task-month ${
                darkTheme ? `light-theme` : `dark-theme`
              }`}
            >
              {task.month}
            </p>
            <time className="task-date" dateTime={task.fullDate}>
              {task.date}
            </time>
          </div>

          <button
            className={`remove-btn ${darkTheme ? `light-theme` : `dark-theme`}`}
            onClick={() => handleRemoveTask(task)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
              ></path>
              <path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path>
              <path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path>
            </svg>
          </button>
        </article>
      ))}
    </>
  );
};
