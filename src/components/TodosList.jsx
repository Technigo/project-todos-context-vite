import React from "react";
import TodoItem from "./TodoItem";
import { useTodosContext } from "../context/TodoContext";
import "../styles/TodoList.css";

const TodosList = () => {
  const { todos } = useTodosContext();
  return (
    <ul className="todolist-container">
      {todos.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};

export default TodosList;
