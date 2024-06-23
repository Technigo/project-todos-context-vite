import React from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { TodosProvider } from "../context/TodoContext";

const TodosLogic = () => {
  return (
    <TodosProvider>
      <InputTodo />
      <TodosList />
    </TodosProvider>
  );
};

export default TodosLogic;
