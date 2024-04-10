import { useToDos } from "../ToDoContext";
import { useState } from "react";

export const AddToDo = () => {
  const [text, setText] = useState("");
  const { addToDo } = useToDos();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return addToDo(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="">
        <input
          type="text"
          value={text}
          placeholder="Add a new task"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit">✚</button>
      </form>
    </div>
  );
};
