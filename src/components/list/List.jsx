import { ListItem } from "../listItem/ListItem";
import { useTodo } from "../../contexts/TodoContext";
import "./list.css";

export const List = () => {
  const [...tasks] = useTodo();
  console.log(tasks);

  return (
    <section className="task-container">
      <ul className="task-list">
        {tasks.map(item => {
          return (
            <ListItem
              key={item.id}
              task={item.task}
            />
          );
        })}
      </ul>
    </section>
  );
};
