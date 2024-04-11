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
            <label>
              {todo.text}
            </label>
            <span> - {moment(todo.time).format("hh:mm A")}</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
