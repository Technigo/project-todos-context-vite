import { useToDos } from "../contexts/ToDoContext";
import { useState } from "react";
import moment from "moment";


export const AddToDo = () => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const { addToDo } = useToDos();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    // Format the date using moment.js
    const formattedDate = moment(date).format("YYYY-MM-DD");

    addToDo(text, formattedDate, category); 
    setText("");
    setDate("");
    setCategory("");
  };

  return (
    <div>
      <h2>New Task</h2>
      <form onSubmit={submitHandler} className="">
        <input
          type="text"
          value={text}
          placeholder="Add a new task"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          type="date"
          value={date}
          placeholder="Date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <input
          type="text"
          value={category}
          placeholder="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
