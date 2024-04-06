import { useState } from "react";
import { useTodo } from "../../contexts/TodoContext";
import "./form.css";

export const Form = () => {
  const { tasks, setTasks, addTask } = useTodo();
  const [newTask, setNewTask] = useState({
    _id: tasks.length + 1,
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
    setNewTask({ ...newTask, desc: event.target.value });
    console.log("New task", newTask);
  };

  return (
    <div className="form-container">
      <h2>Add new task</h2>
      <p>Use this form to add a new task to the list</p>
      <form
        className="todo-form"
        onSubmit={handleFormSubmit}
        name="todo-form">
        <input
          type="text"
          name="desc"
          value={newTask.desc}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
