import { useToDo } from "../context/ToDoContext";
import { useComplete } from "../context/CompleteContext";

const ToDoList = () => {
  const { ToDo, removeToDo } = useToDo();
  const { complete, addComplete } = useComplete();

  const handleComplete = e => {
    //decide if we want to also remove the task from the completed list
    if (!e.target.checked) return;
    const newComplete = e.target.value;
    addComplete(newComplete);
    removeToDo(newComplete);
  };

  const deleteToDo = e => {
    const toDoToRemove = e.target.value;
    removeToDo(toDoToRemove);
  };

  return (
    <ul className="todo-list">
      {ToDo &&
        ToDo.map(todo => (
          //replace the value of the key and some attr with todo.timestamp later
          <li key={todo.task}>
            <input
              type="checkbox"
              id={todo.task}
              value={todo.task}
              onChange={handleComplete}
            />
            <label htmlFor={todo.task}>{todo.task}</label>
            <button value={todo.task} onClick={deleteToDo}>
              delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ToDoList;
