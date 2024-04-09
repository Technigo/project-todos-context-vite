import { useToDo } from "../context/ToDoContext";
import { useComplete } from "../context/CompleteContext";
import ToDoForm from './ToDoForm'
import GreetUser from './Greeting'
import '../styling/ToDoList.css'


const ToDoList = () => {
  const { ToDo, removeToDo } = useToDo();
  const { complete, addComplete } = useComplete();

  return (
    <div className="card">
      <GreetUser />
        <ToDoForm />
    <ul className="section todo-list">
    <h1>To do:</h1>
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
    </div>
  )
}

export default ToDoList;
