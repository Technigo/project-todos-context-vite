import { TodoProvider } from "./contexts/TodoContext";
import { Form } from "./components/form/Form";
import { List } from "./components/list/List";

export const App = () => {
  return (
    <TodoProvider>
      <h1>Sofias very important To Do list</h1>
      <main>
        <Form />
        <List />
      </main>
    </TodoProvider>
  );
};
