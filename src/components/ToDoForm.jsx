import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

export const TodoForm = () => {
  const { addTodo } = useTodoContext();
  const [newTodo, setNewTodo] = useState({
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTodo.description) {
      addTodo(newTodo);
      setNewTodo({ description: "" });
    } else {
      alert("Please fill in the field");
    }
  };

  const handleChange = (event) => {
    setNewTodo({
      ...newTodo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add a new task</label>
        <input
          type="text"
          value={newTodo.description}
          placeholder="New task"
          name="description"
          onChange={handleChange}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};
