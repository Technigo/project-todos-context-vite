import React, { useState } from "react";
export const TodoForm = () => {
  
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // this one clears the text in the input field
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}