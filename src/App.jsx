import { TodoList } from "./components/TodoList";
import { TasksProvider } from "./contexts/TasksContext";
import { CheckedTaskProvider } from "./contexts/CheckedTaskContext";
import { TodoForm } from "./components/TodoForm";

export const App = () => {
  return (
    <TasksProvider>
      <CheckedTaskProvider>
        <h1>To Do-app!</h1>
        <TodoList />
        <TodoForm />
      </CheckedTaskProvider>
    </TasksProvider>
  );
};
