import { useToDo } from "../context/ToDoContext";
import { useComplete } from "../context/CompleteContext";

const ToDoList = () => {
  const { ToDo } = useToDo();
  const { complete, addComplete } = useComplete();

  const handleCheck = e => {
    //decide if we want to also remove the task from the completed list
    if (!e.target.checked) return;
    const newComplete = e.target.value;
    addComplete(newComplete);
  };

  return (
    <ul className="todo-list">
      {ToDo.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            id={index}
            value={todo.task}
            onChange={handleCheck}
          />
          <label htmlFor={index}>{todo.task}</label>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
