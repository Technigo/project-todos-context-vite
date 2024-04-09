import { TodoProvider } from "./components/TodoContext/TodoContext";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoForm } from "./components/TodoForm/TodoForm";

export const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};
