import { useState } from "react";
import { useToDoContext } from "../contexts/ToDoContext";

export const ToDoForm = () => {
  const { addToDo } = useToDoContext();
  const [newToDo, setNewToDo] = useState({
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newToDo.description) {
      addToDo(newToDo);
      setNewToDo({ description: "" });
    } else {
      alert("Please fill in the field");
    }
  };

  const handleChange = (event) => {
    setNewToDo({
      ...newToDo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add a new task</label>
        <input
          type="text"
          value={newToDo.description}
          placeholder="New task"
          name="description"
          onChange={handleChange}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};
