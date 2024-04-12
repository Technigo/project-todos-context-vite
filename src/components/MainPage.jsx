import { useAppData } from "../contexts/FormContext";
import { useModeChangeData } from "../contexts/ModeContext";
import { AddTask } from "./AddTask";
import { TodoList } from "./TodoList";
import "./header.css";

export const MainPage = () => {
  const { appContent } = useAppData();
  const { mode, handleModeChange } = useModeChangeData();
  return (
    <>
      <main className={mode}>
        <h1>{appContent.title}</h1>
        <button onClick={handleModeChange} className="modebtn">
          {mode === "light" ? "dark" : "light"}
        </button>
        <AddTask />
        <TodoList />
      </main>
    </>
  );
};
