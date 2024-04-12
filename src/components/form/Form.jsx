import { useState } from "react";
import { useTodo } from "../../contexts/TodoContext";
import "./form.css";
import { Select } from "../select/Select";
import { Duedate } from "../date-picker/Duedate";

export const Form = () => {
  const { tasks, setTasks, addTask } = useTodo();
  const [newTask, setNewTask] = useState({
    _id: 0,
    desc: "",
    isDone: false,
  });
  const [error, setError] = useState();

  const handleError = () => {
    setError("Must be over 2 characters");
    setTimeout(() => setError(""), 2000);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    newTask.desc.length > 3 ? addTask(newTask) : handleError();
    setNewTask({ ...newTask, desc: "" });
  };

  const handleChange = event => {
    setNewTask({
      ...newTask,
      _id: tasks.length + 1,
      desc: event.target.value,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = event => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value,
    });
  };

  const handleDuedate = date => {
    setNewTask({
      ...newTask,
      duedate: date,
    });
  };

  return (
    <section className="form-container">
      <h2>Add new task 👇</h2>
      <form
        className="todo-form"
        onSubmit={handleFormSubmit}
        name="todo-form">
        <input
          id="task-input"
          type="text"
          name="desc"
          className={error && "error"}
          value={newTask.desc}
          onChange={handleChange}
          placeholder={error ? error : "Type your new task..."}
        />
        <Select
          type="category"
          handler={handleSelect}
        />
        <Select
          type="sprint"
          handler={handleSelect}
        />
        <Select
          type="project"
          handler={handleSelect}
        />
        <Duedate handler={handleDuedate} />
        <button className="btn">Submit</button>
      </form>
    </section>
  );
};
