import { useAppData } from "../../contexts/FormContext";
import { useModeChangeData } from "../../contexts/ModeContext";
import { AddTask } from "../addTask/AddTask";
import { TodoList } from "../todoList/TodoList";
import { Time } from "./Time";

import moment from "moment";
import "./mainPage.css";


export const MainPage = () => {
  const { appContent } = useAppData();
  const { mode, handleModeChange } = useModeChangeData();

  const date = moment().format("MMM Do YY");
  const weekday = moment().format("dddd");

  return (
    <>
    <header >{appContent.title}</header>
      <main className={mode}>
        <div className="date-mode">
          <Time weekday={weekday} date={date} />
  
          {/* <button onClick={handleModeChange}>
            {mode === "light" ? "dark" : "light"}
          </button> */}
        </div>

        <div className="container">
         
          <TodoList />
          <AddTask />
        </div>
         
      </main>
    </>
  );
};
