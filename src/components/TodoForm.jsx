import { useState } from "react";
import { useTasks } from "../contexts/TasksContext";
import { useCheckedTask } from "../contexts/CheckedTaskContext";

export const TodoForm = () => {
  const { addTask } = useTasks();

  const [newTask, setNewTask] = useState({
    todo: "",
  });

  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTask.todo) {
      addTask(newTask);
      setNewTask({ todo: "" });
    } else {
      alert("Please fill in the field");
    }
  };

  return (
    <>
      <div>
        <h2>Add new to do here:</h2>
        <form onSubmit={handleSubmit}>
          <label>
            To do:
            <input
              type="text"
              name="todo"
              value={newTask.todo}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
    </>
  );
};
