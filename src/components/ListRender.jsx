import { CheckButton } from "./CheckButton";
import { RemoveButton } from "./RemoveButton";
import moment from "moment";

export const ListRender = ({ array }) => {
  console.log("ListRender Array: ", array);

  return (
      <div>
        {array.map((todo, index) => (
          <div className="todo-container" key={index}>
            <div className={todo.complete ? "todo complete" : "todo"}>
              <CheckButton todo={todo.title}  index={index} />

              <RemoveButton todo={todo} index={index} />
            </div>
            <div className="timestamp">
              {todo.complete ? (
                <p>Completed: {moment().calendar()} </p>
              ) : (
                <p>Added: {todo.date}</p>
              )}
            </div>
          </div>
        ))}
      </div>
  );
};
