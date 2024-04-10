import { useState } from "react";
import { useToDo } from "../context/ToDoContext";
import "../styling/ToDoForm.css";
import useSound from "use-sound";
import Submit from "../assets/sounds/submit.mp3";

const ToDoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const [charCount, setCharCount] = useState(0);
  const { addToDo } = useToDo();
  const [playSubmit] = useSound(Submit, { volume: 0.5 });

  const handleInputChange = e => {
    const userInput = e.target.value;
    setNewTodo(userInput);
    setCharCount(userInput.length);
  };

  const handleSubmit = e => {
    e.preventDefault();
    playSubmit();
    //validate the task - avoid empty input
    console.log(newTodo);
    addToDo(newTodo);
    setNewTodo("");
    setCharCount(0);
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
          disabled={newTodo && charCount <= 70 ? false : true}
          type="submit"
          className="button add"
        >
          Add Todo
        </button>
      </form>
      <p style={{ color: charCount > 70 && "red" }}>{charCount}/70</p>
    </div>
  );
};

export default ToDoForm;
