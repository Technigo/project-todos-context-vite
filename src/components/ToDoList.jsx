import useSound from "use-sound";

import clear from "../assets/noToDo.svg";
import CompleteAll from "../assets/sounds/completeAll.mp3";
import { useComplete } from "../context/CompleteContext";
import { useToDo } from "../context/ToDoContext";
import TaskList from "./TaskList";

import "../styling/ToDoList.css";

const ToDoList = () => {
  const { ToDo, completeAllToDo } = useToDo();
  const { addAllComplete } = useComplete();
  const [playCompleteAll] = useSound(CompleteAll, { volume: 0.1 });

  return (
    <div className="section todo-list">
      <div className="top-todo">
        <h1>To do:</h1>
        <button
          type="button"
          className="button complete"
          onClick={() => {
            playCompleteAll();
            completeAllToDo();
            addAllComplete(ToDo);
          }}
          disabled={ToDo.length === 0 ? true : false}
        >
          Complete all
        </button>
      </div>
      {ToDo.length === 0 ? (
        <img src={clear} alt="No todo" className="clear" />
      ) : (
        <TaskList data="ToDo" />
      )}
      <p className="count">Count:{ToDo.length}/5</p>
    </div>
  );
};

export default ToDoList;
