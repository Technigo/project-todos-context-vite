import { TodoProvider } from "./Components/TodoContext/TodoContext.jsx";
import { ListName } from "./Components/ListName/ListName.jsx";
import { TodoList } from "./Components/TodoList/TodoList.jsx";
import { WorkoutBlock } from "./Components/Workout/WorkoutBlock.jsx";
import { ReminderBlock } from "./Components/Reminder/ReminderBlock.jsx";
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
          <div className="first-block">
            <ListName />
          </div>
          <div className="second-block">
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
