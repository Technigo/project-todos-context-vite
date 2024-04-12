import { useAppData } from "../contexts/FormContext";
import { useModeChangeData } from "../contexts/ModeContext";
import "./header.css";
  import { AddTask } from "./AddTask";
import { TodoList } from "./TodoList";

export const MainPage = () => {
  const { appContent } = useAppData();
  const { mode, handleModeChange } = useModeChangeData();
  return (
    <>
    <main className={mode} >
    <div>
      <header>{appContent.title}</header>
      <button onClick={handleModeChange}>
        {mode === "light" ? "dark" : "light"}
      </button>
    </div>
    <AddTask />
    <TodoList />
    </main>
    
    </>
    
  );
};
