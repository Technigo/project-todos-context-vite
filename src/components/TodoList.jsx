import { useTodo } from "../contexts/TodoContext.jsx";
import { useCheckbox } from "../contexts/CheckboxContext.jsx";
import "./todo-list.css";

//Map and list all todos
export const TodoList = () => {
  const { todo, removeToDo } = useTodo();
  const { tasks, toggleChecked } = useCheckbox();

  //const filterDoneToDos = () => {};

  const handleRemoveTask = (id) => {
    removeToDo(id);
    console.log(id);
  };

  //PÅ RAD 28 handleRemoveTask() - vilket värde ska in i parentesen?
  // key={task} är det rätt?
  return (
    <div>
      {" "}
      <h4>To dos</h4>
      {todo.map((task, id) => (
        <div className="task" key={task.id}>
          <form>
            <input
              type="checkbox"
              key={task.id}
              onChange={toggleChecked}></input>
            <label>{task.todotext}</label>
            <button type="button" onClick={() => handleRemoveTask(task.id)}>
              🚮
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};
