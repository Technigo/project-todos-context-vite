import { ListItem } from "../listItem/ListItem";
import { useTodo } from "../../contexts/TodoContext";
import "./list.css";

export const List = () => {
  const { tasks } = useTodo([]);
  const completedTasks = tasks.filter(item => item.isDone);

  return (
    <section className="task-container">
      <p>You have {tasks.length} tasks</p>
      <p>
        You have completed {completedTasks.length}.{" "}
        {tasks.length - completedTasks.length} left to do!{" "}
      </p>
      <ul className="task-list">
        {tasks.map(item => {
          return (
            <ListItem
              key={`task${item._id}`}
              desc={item.desc}
              id={item._id}
              isDone={item.isDone}
            />
          );
        })}
      </ul>
    </section>
  );
};
