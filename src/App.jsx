import { CheckButton } from "./components/CheckButton";
import { TaskInput } from "./components/TaskInput";

export const App = () => {
  return(
    <div>Todo App
      <div className="input">
        <TaskInput />
      </div>
    <div className="task-list">
        <CheckButton name="name"/>
        <CheckButton name="name2"/>
    </div>
    </div>
  );
};
