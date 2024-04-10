import { TodoProvider } from "./Components/TodoContext.jsx";
import { ListName } from "./Components/ListName.jsx";
import { TodoList } from "./Components/TodoList.jsx";
import { WorkoutBlock } from "./Components/WorkoutBlock.jsx";
import { ReminderBlock } from "./Components/ReminderBlock.jsx";
import { NotesBlock } from "./Components/NotesBlock.jsx";

export const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo App</h1>
      </div>
      <div className="container">
        <div className="block">
          <ListName />
        </div>
        <div className="block">
          <WorkoutBlock />
        </div>
        <div className="block">
          <TodoList />
        </div>
        <div className="block">
          <ReminderBlock />
        </div>
        <div className="block">
          <NotesBlock />
        </div>
      
      </div>
    </TodoProvider>
  );
};
