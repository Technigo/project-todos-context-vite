// Component of a form where you add new tasks
import { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";
import moment from "moment"; // import moment.js

export const TodoForm = () => {
  const [todo, setTodo] = useState("");
  // "addTodo" function comes from TodoContext.jsx, allows to add new tasks.
  // useContext(TodoContext) is used to access the current context value (like todos, addTodo, toggleTodo) of TodoContext. -> allowing to use directly these shared values without passing props
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // If user didnot type anything, don't submit
    if (!todo) return;

    addTodo({
      // use time as ID since "current time" is unique
      id: Date.now(),
      // The name or description of your task
      todo,
      // "false" = it is not completed
      completed: false,
      // createdAt: Records when the task was added
      //1. moment(): gets the current time date
      //2. .format: makes easier for human to read
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    });
    // Clears the form so you can add more tasks.
    setTodo("");
  };

  return (
    // This form submits a new task when you press "Enter" or click the submit button.
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

/* Memo: Why we use moment.js

moment.js simplifies date and time handling in JavaScript with user-friendly features, despite native JS capabilities. It ensures consistency across browsers and supports localization. However, due to its large size, moment.js has seen declining popularity, with maintainers suggesting alternatives like date-fns and Luxon for new projects. These alternatives provide similar functionalities but are lighter and actively maintained.

*/
