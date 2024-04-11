import { useState } from "react";
import useSound from "use-sound";

import Submit from "../assets/sounds/submit.mp3";
import { useToDo } from "../context/ToDoContext";

import "../styling/ToDoForm.css";

const ToDoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const [charCount, setCharCount] = useState(0);
  const { addToDo } = useToDo();
  const [playSubmit] = useSound(Submit, { volume: 0.1 });

  const handleInputChange = e => {
    const userInput = e.target.value;
    setNewTodo(userInput);
    setCharCount(userInput.length);
  };

  const handleSubmit = e => {
    e.preventDefault();
    playSubmit();
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
          placeholder="Write your task here..."
          onChange={handleInputChange}
        />
        <button
          disabled={newTodo && charCount <= 70 ? false : true}
          type="submit"
          className="submit-button"
        >
          Add Todo
        </button>
      </form>
      <p className="word-count" style={{ color: charCount > 70 && "red" }}>
        {charCount}/70
      </p>
    </div>
  );
};

export default ToDoForm;
