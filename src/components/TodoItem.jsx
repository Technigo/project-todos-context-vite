// Component to show and check one todo (a task)
import { RxCross1 } from "react-icons/rx"

import moment from "moment"
import "./TodoItem.css"

// passing the props (data = id, completed, onChange, todo, createdAt, removeTodo) from TodoList.jsx
export const Todo = ({
  id,
  completed,
  onChange,
  todo,
  createdAt,
  removeTodo,
}) => {
  return (
    <div className="todo-item">
      <li
        key={id} // Use the unique id (= Date.now() thing) of each todo for the key prop.
        style={{ textDecoration: completed ? "line-through" : "none" }} // If the todo is completed, strike through the text; if not, display normally.
      >
        <div className="list-item">
          <div className="list-text">
            <input
              id={id}
              className="checkbox"
              type="checkbox"
              checked={completed} // The checkbox is checked if the todo is marked as completed.
              onChange={onChange} // When you click the checkbox, the toggleTodo function is called with the todo's ID to switch its "completed" status between done and not done.
            />
            <label htmlFor={id} className="todo-text">
              {todo}
            </label>
            <div className="todo-time">
              {moment(createdAt).format("YYYY-MM-DD HH:mm")}
            </div>
          </div>

          <div className="remove-button">
            <button onClick={() => removeTodo(id)}>
              <RxCross1 className="remove-icon" />
            </button>
          </div>
        </div>
      </li>
    </div>
  )
}
