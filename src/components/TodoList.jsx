import { useTodo } from "../context/TodoContext";

export const TodoList = () => {
  const { todoList, deleteTodo, toggleTodo, totalItems, totalChecked } = useTodo();

  return (
    <div className="todo-list-container">
      <h2>To do list:</h2>
      <p>{totalChecked}/{totalItems}</p>
      <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={(e) => toggleTodo(item.id, e.target.checked)}
                />
                <span
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </span>
                <button onClick={() => deleteTodo(item.id)}>Delete</button>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
