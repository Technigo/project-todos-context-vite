import { useState } from "react";
import { useTodo } from "../contexts/TodoContext.jsx";
import "./todo-form.css";

//Text field and handleSubmit function

export const TodoForm = () => {
  const { addTodo } = useTodo();
  const [newTodo, setNewTodo] = useState({
    todotext: "",
    id: 0,
  });

  const handleChange = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo({ todotext: "", id: newTodo.id + 1 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>New Task </label>
      <input
        className="inputField"
        type="text"
        name="todotext"
        key={newTodo.id}
        value={newTodo.todotext}
        onChange={handleChange}
      />
      <button type="submit" className="addTodo-btn">Add!</button>
    </form>
  );
};
