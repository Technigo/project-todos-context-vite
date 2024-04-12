import { ListItem } from "../listItem/ListItem";
import { useTodo } from "../../contexts/TodoContext";
import "./list.css";
import { Counter } from "../counter/Counter";

export const List = () => {
  const { tasks } = useTodo([]);

  return (
    <section className="task-container">
      <Counter tasks={tasks} />
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
