//Form to add new task
import { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";
import moment from "moment";

export const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // If user didnot type anything, don't submit
    if (!todo) return;
    addTodo({
      // use time as ID since it is differ in mili secounds
      id: Date.now(),
      // what is the task?
      todo,
      // it is not completed
      completed: false,
      // when it was created.
      //1. moment(): gets the current time date
      //2. .format: makes easier for human to read
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    });
    // Clear out the form to add next task
    setTodo("");
  };

  return (
    // press enter or click submit
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <input
          className="text-field"
          // it is a "text field"
          type="text"
          // Make the value (that user typed) into "todo" state
          value={todo}
          // everytime when event (todo) changes, it updates
          onChange={(event) => setTodo(event.target.value)}
          placeholder="Add a new task"
        />
      </form>
    </div>
  );
};
