import { TodoProvider } from "./Components/TodoContext.jsx";
import { ListName } from "./Components/ListName.jsx";
import { TodoList } from "./Components/TodoList.jsx";
import { WorkoutBlock } from "./Components/WorkoutBlock.jsx";
import { ReminderBlock } from "./Components/ReminderBlock.jsx";
import "./index.css";

export const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>To-Do App</h1>
      </div>
      <div className="container">
        <div className="left-block">
          <TodoList />
        </div>
        <div className="right-block">
          <div className="block">
            <ListName />
          </div>
          <div className="block">
            <WorkoutBlock />
          </div>
          <div className="third-block">
            <ReminderBlock />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};
