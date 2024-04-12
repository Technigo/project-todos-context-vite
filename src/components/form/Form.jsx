import { useState } from "react";
import { useTodo } from "../../contexts/TodoContext";
import "./form.css";

export const Form = () => {
  const { tasks, setTasks, addTask } = useTodo();
  const [newTask, setNewTask] = useState({
    _id: 0,
    desc: "",
    isDone: false,
  });

  const handleFormSubmit = event => {
    event.preventDefault();
    newTask.desc.length > 3
      ? addTask(newTask)
      : console.error("Must be over 2 char");
    setNewTask({ ...newTask, desc: "" });
  };

  const handleChange = event => {
    setNewTask({ ...newTask, _id: tasks.length + 1, desc: event.target.value });
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
          value={newTask.desc}
          onChange={handleChange}
        />
        <button className="btn">Submit</button>
      </form>
    </section>
  );
};
