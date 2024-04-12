import { useToDos } from "../contexts/ToDoContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import "./AddToDo.css";

export const AddToDo = () => {
  //variables to store text for task, selected date and category
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  //access functionality for adding tasks from ToDoContext
  const { addToDo, categories } = useToDos();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    //format the date using moment.js
    const formattedDate = moment(date).format("MMM Do, YY");

    //resets state of all input fields after submission
    addToDo(text, formattedDate, category);
    setText("");
    setDate("");
    setCategory("");
  };

  return (
    <section className="add-section">
      {/* navigation back to main page */}
      <Link to="/" className="main-link">
        <p>Back to main page!</p>
      </Link>
      {/* navigation back to list */}
      <Link to="/todo" className="todo-link">
        <p>Back to ToDo list!</p>
      </Link>
      {/* <div className="add-container"> */}
      <div className="add-title">
        <h2>New Task</h2>
      </div>
      <form onSubmit={submitHandler} className="add-form">
        <label htmlFor="task">What are you planning?</label>
        <textarea
          className="add-text"
          id="task"
          name="task"
          rows="5"
          cols="40"
          value={text}
          placeholder="Add a new task"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <label htmlFor="date">⏰</label>
        <input
          className="add-date"
          id="date"
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <label htmlFor="category">📌</label>
        {/* Use categories array to generate options for select dropdown */}
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <button type="submit" className="add-btn">
          Create
        </button>
      </form>

      {/* </div> */}
    </section>
  );
};
