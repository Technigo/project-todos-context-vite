import { useState, useContext, useEffect } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import { Form } from "./components/form/Form";
import { List } from "./components/list/List";

export const App = () => {
  return (
    <TodoProvider>
      <Form />
      <List />
    </TodoProvider>
  );
};
