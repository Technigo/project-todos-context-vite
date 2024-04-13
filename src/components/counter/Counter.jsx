import "./counter.css";

export const Counter = ({ tasks }) => {
  const completedTasks = tasks.filter(item => item.isDone);

  return (
    <div className="counter">
      <p>
        You have <span className="count">{tasks.length}</span> tasks!
      </p>
      <p>
        You have completed{" "}
        <span className="count">{completedTasks.length}</span>.
      </p>
      <p>
        <span className="count">{tasks.length - completedTasks.length}</span>{" "}
        left to do!
      </p>
    </div>
  );
};
