import { useTodo } from "../context/TodoContext";
import moment from "moment";
import "./TodoList.css"

export const TodoList = () => {
  const {
    todoList,
    deleteTodo,
    toggleTodo,
    totalItems,
    totalChecked,
    toggleAllTodos,
  } = useTodo();

  return (
    <div className="todo-list-container">
      <h2>To do list:</h2>
      <p>
        Completed: {totalChecked} / {totalItems}
      </p>
      <ul className="todo-ul">
        {todoList.map((item) => {
          return (
            <li className="todo-li" key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={(e) => toggleTodo(item.id, e.target.checked)}
                />
                <span className="span-todo"
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </span>
                <span className="span-time">added on {moment(item.createdAt).format("HH:mm")}</span>

                <button onClick={() => deleteTodo(item.id)}>x</button>
              </label>
            </li>
          );
        })}
      </ul>
      <button onClick={toggleAllTodos}>
        {totalChecked === totalItems ? "Uncheck All" : "Check All"}
      </button>
    </div>
  );
};
