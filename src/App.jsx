import { useState } from "react";
import { TodoProvider } from "./Components/TodoContext/TodoContext.jsx";
import { ListName } from "./Components/ListName/ListName.jsx";
import { TodoList } from "./Components/TodoList/TodoList.jsx";
import { WorkoutBlock } from "./Components/Workout/WorkoutBlock.jsx";
import "./index.css";

export const App = () => {
  const [isWorkoutBlockVisible, setIsWorkoutBlockVisible] = useState(true);

  const toggleWorkoutBlockVisibility = () => {
    setIsWorkoutBlockVisible(!isWorkoutBlockVisible);
  };

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
          <div
            className={`second-block ${
              isWorkoutBlockVisible ? "expanded" : "collapsed"
            }`}
          >
            <div className="second-block-content">
              {isWorkoutBlockVisible && <WorkoutBlock />}
            </div>
            <button
              className="toggle-button"
              onClick={toggleWorkoutBlockVisibility}
            >
              {isWorkoutBlockVisible ? "Hide" : "Show"}
            </button>
          </div>
          <div className="third-block"></div>
        </div>
      </div>
    </TodoProvider>
  );
};
