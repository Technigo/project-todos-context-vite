import { ListItem } from "../listItem/ListItem";
import { useTodo } from "../../contexts/TodoContext";
import "./list.css";

export const List = () => {
  const { tasks } = useTodo([]);

  // const doneTasks = [tasks].filter(task => task);

  return (
    <section className="task-container">
      <ul className="task-list">
        {tasks.map(item => {
          return (
            <ListItem
              key={item._id}
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
