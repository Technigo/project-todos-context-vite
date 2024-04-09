import { useComplete } from "../context/CompleteContext";
import { useToDo } from "../context/ToDoContext";
import "../styling/CompletedList.css";

const CompleteList = () => {
  const { complete, removeComplete } = useComplete();
  const { addToDo } = useToDo();

  return (
    <div className="card">
      <div className="section completed">
        <h1>Completed</h1>
        <ul className="complete-list">
          {complete.map(item => (
            ////replace the value of the key and some attr with item.timestamp later
            <li key={item.task}>
              <input
                id={item.task}
                type="checkbox"
                defaultChecked
                value={item.task}
                onChange={() => {
                  addToDo(item.task);
                  removeComplete(item);
                }}
              />
              <label htmlFor={item.task}>{item.task}</label>
              <button
                type="button"
                value={item.task}
                onClick={() => removeComplete(item)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
        <p>Count:{complete.length}/5</p>
      </div>
    </div>
  );
};

export default CompleteList;
