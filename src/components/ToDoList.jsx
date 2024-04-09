import { useToDo } from "../context/ToDoContext";
import { useComplete } from "../context/CompleteContext";

const ToDoList = () => {
  const { ToDo, removeToDo } = useToDo();
  const { complete, addComplete } = useComplete();

  return (
    <ul className="todo-list">
      {ToDo.map(todo => (
        //replace the value of the key and some attr with todo.timestamp later
        <li key={todo.task}>
          <input
            type="checkbox"
            id={todo.task}
            // value={todo.task}
            checked={complete.includes(todo)}
            onChange={() => {
              addComplete(todo);
              removeToDo(todo);
            }}
          />
          <label htmlFor={todo.task}>{todo.task}</label>
          <button value={todo.task} onClick={() => removeToDo(todo)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
