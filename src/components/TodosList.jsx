import React from "react";
import TodoItem from "./TodoItem";
import { useTodosContext } from "../context/TodoContext";

const TodosList = () => {
  const { todos } = useTodosContext();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};

export default TodosList;
