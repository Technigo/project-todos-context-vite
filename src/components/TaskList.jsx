import useSound from "use-sound";

import checked from "../assets/checked.svg";
import trash from "../assets/rubbish-bin.svg";
import AddToDo from "../assets/sounds/addToDo.mp3";
import CompleteToDo from "../assets/sounds/complete.mp3";
import Dump from "../assets/sounds/delete.mp3";
import unChecked from "../assets/unchecked.svg";
import { useComplete } from "../context/CompleteContext";
import { useToDo } from "../context/ToDoContext";

import "../styling/TaskList.css";

const TaskList = ({ data }) => {
  // sounds
  const [playDump] = useSound(Dump, { volume: 0.1 });
  const [playAddToDo] = useSound(AddToDo, { volume: 0.1 });
  const [playCompleteToDo] = useSound(CompleteToDo, { volume: 0.1 });
  // contexts
  const { ToDo, addToDo, removeToDo } = useToDo();
  const { complete, addComplete, removeComplete } = useComplete();

  // event handler functions
  const changeStatus = item => {
    if (data === "ToDo") {
      playCompleteToDo();
      setTimeout(() => {
        addComplete(item);
        removeToDo(item);
      }, 500);
    } else {
      playAddToDo();
      setTimeout(() => {
        addToDo(item.task);
        removeComplete(item);
      }, 500);
    }
  };

  const removeItem = item => {
    playDump();
    if (data === "ToDo") {
      removeToDo(item);
    } else {
      removeComplete(item);
    }
  };

  return (
    <ul className="task-list">
      {(data === "ToDo" ? ToDo : complete).map(item => (
        <li key={item.createdAt}>
          <div className="task-item">
            <div className="checkbox">
              <input
                type="checkbox"
                id={item.createdAt}
                defaultChecked={complete.includes(item)}
                onChange={() => {
                  changeStatus(item);
                }}
              />
              <img
                src={unChecked}
                alt="unchecked checkbox"
                className="unchecked checkbox"
              />
              <img
                src={checked}
                alt="checked checkbox"
                className="checked checkbox"
              />
            </div>
            <div className="task-content">
              <label className="task-text" htmlFor={item.createdAt}>
                {item.task}
              </label>
              <img
                src={trash}
                className="trashbin"
                onClick={() => {
                  removeItem(item);
                }}
              />
            </div>
          </div>
          <p>Created: {item.createdAt.calendar()}</p>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
