import { useState } from "react";
import { useTasks } from "../contexts/TasksContext";

export const TaskForm = () => {
  const { addTask } = useTasks();

  const [newTask, setNewTask] = useState({
    id: "",
    task: "",
  });

  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value,
    });
  };

  const newId = () => {
    Math(tasks.length + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTask.task) {
      setNewTask({ id: { newId } });
      addTask(newTask);
      setNewTask({ id: null, task: "" });
    } else {
      alert("Please fill in the field");
    }
  };

  return (
    <>
      <div>
        <h2>Add new task here:</h2>
        <form onSubmit={handleSubmit}>
          <label>
            To do:
            <input
              type="text"
              name="task"
              value={newTask.task}
              onChange={handleChange}
              placeholder="Type a task.."
            />
          </label>
          <button
            type="submit"
            className="submit-task"
            aria-label="Button for add task"
          >
            Add task
          </button>
        </form>
      </div>
    </>
  );
};
