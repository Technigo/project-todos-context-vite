import { useState } from "react";
import { useToDo } from "../context/ToDoContext";
import "../styling/ToDoForm.css";
import useSound from "use-sound";
import Submit from "../assets/sounds/submit.mp3";

const ToDoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { addToDo } = useToDo();
  const [playSubmit] = useSound(Submit, { volume: 0.5 });

  const handleInputChange = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    playSubmit();
    //validate the task - avoid empty input
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
        <button
          disabled={newTodo ? false : true}
          type="submit"
          className="button add"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
