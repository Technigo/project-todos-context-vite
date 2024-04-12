import { useComplete } from "../context/CompleteContext";
import "../styling/CompletedList.css";
import TaskList from "./TaskList";
import noComplete from "../assets/nocomplete.svg";
import Dump from "../assets/sounds/delete.mp3";
import useSound from "use-sound";

const CompleteList = () => {
  const { complete, removeAllComplete } = useComplete();
  const [playDump] = useSound(Dump, { volume: 0.1 });

  return (
    <div className="section completed">
      <div className="top-complete">
        <h1>Completed:</h1>
        <button
          type="button"
          className="button remove-all"
          onClick={() => {
            playDump();
            removeAllComplete();
          }}
          disabled={complete.length === 0 ? true : false}
        >
          Remove all
        </button>
      </div>
      {complete.length === 0 ? (
        <img
          className="no-complete-img"
          src={noComplete}
          alt="no completed tasks"
        />
      ) : (
        <TaskList data="complete" />
      )}
      <p className="count">Count:{complete.length}/5</p>
    </div>
  );
};

export default CompleteList;
