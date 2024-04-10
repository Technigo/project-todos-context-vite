import { useTodo } from "../contexts/TodoContext.jsx";
import { useCheckbox } from "../contexts/CheckboxContext.jsx";
import "./todo-list.css";

//Map and list all todos
export const TodoList = () => {
  const { todo } = useTodo();
  const { tasks, toggleChecked } = useCheckbox();

  //const filterDoneToDos = () => {};

  const handleRemoveTask = (toDo) => {
    removeToDo(toDo);
    console.log(toDo);
  };


  //PÅ RAD 28 handleRemoveTask() - vilket värde ska in i parentesen? 
  // key={task} är det rätt?
  return (
    <div>
      {" "}
      <h4>To dos</h4>
      {todo.map((task, index) => (
        <div className="task" key={index}>
          <form>
            <input type="checkbox" key={index} onChange={toggleChecked}></input>
            <label>{task.todotext}</label>
            <button type="button" key={task} onClick={() => handleRemoveTask()}>
              🚮
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};
