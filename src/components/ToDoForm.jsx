import { useState } from "react";
import { useToDo } from "../context/ToDoContext";
import '../styling/ToDoForm.css'


const ToDoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { ToDo, addToDo } = useToDo();
  // console.log(ToDo[0].task)

  const handleInputChange = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newTodo);
    addToDo(newTodo);
    setNewTodo("");
  };
  return (
    <div className="section todo-form">
      <h1>What do you need to do today?</h1>
    <form onSubmit={handleSubmit}>
      <input
        value={newTodo}
        type="text"
        placeholder="write your task here..."
        onChange={handleInputChange}
      />
      <button type="submit">submit</button>
    </form>
   </div> 
  )
}

export default ToDoForm;
