import { TodoProvider } from "./components/TodoContext";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

export const App = () => {
  return (
    <TodoProvider>
      <div className="app-container">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};
