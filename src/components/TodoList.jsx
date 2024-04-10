import { useTodo } from "../contexts/TodoContext.jsx";
import { useCheckbox } from "../contexts/CheckboxContext.jsx";
import "./todo-list.css";
//import moment from "moment";

//Map and list all todos
export const TodoList = () => {
  const { todo, removeToDo, clearList } = useTodo();
  const { tasks, toggleChecked, removeChecked } = useCheckbox();

  //const filterDoneToDos = () => {};

  const handleRemoveTask = (id) => {
    removeToDo(id);
    console.log(id);
  };

  const clearChecked = (id) => {
    removeChecked(id);
    console.log(id);
  };

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
              checked={task.isComplete}
              onChange={toggleChecked}></input>
            <label>{task.todotext}</label>
            <button
              className="delete-btn-task"
              type="button"
              onClick={() => handleRemoveTask(task.id)}>
              🚮
            </button>
          </form>
        </div>
      ))}
      <div className="delete-btn-div">
        <div className="delete-btn-all">
          {todo.length > 0 && (
            <button type="button" onClick={() => clearList()}>
              ❌ Clear all
            </button>
          )}
        </div>

        {/* {todo.length > 0 && (
          <button
            className="delete-btn-checked"
            type="button"
            key={todo.id}
            onClick={() => clearChecked(tasks)}>
            ✔️ Clear checked
          </button>
        )} */}
      </div>
    </div>
  );
};
