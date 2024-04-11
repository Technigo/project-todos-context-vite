import React from "react";
import { useToDos } from "../contexts/ToDoContext";
import moment from "moment";

export const ListToDo = () => {
  const { todos, toggleToDo } = useToDos();

  return (
    <div>
      <h1>All</h1>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                toggleToDo(index);
              }}
            />
            <label>{todo.text}</label>
            <span className="category-tag">{todo.category}</span>
            <span> - {moment(todo.time).format("hh:mm A")}</span>
            <span className="category-tag">{todo.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
