import { useTodoContext } from './TodoContext'
import './TodoList.css'

const TodoList = () => {
  const { todos, deleteTodo, toggleTodo } = useTodoContext()

  const handleDelete = (id) => {
    deleteTodo(id)
  }

  const handleToggle = (id) => {
    toggleTodo(id)
  }

  const totalTasksCount = todos.length

  const uncompletedTasksCount = todos.filter(todo => !todo.completed).length

  return (
    <div className="todo-list-container">
      <h2 className="todo-list-title">Todo List</h2>
      <div className="task-count-container">
        <p className="task-count">Total tasks: {totalTasksCount}</p>
        <p className="task-count">Uncompleted tasks: {uncompletedTasksCount}</p>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li className="todo-item" key={todo.id}>
            <label className="checkbox">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <div className={`checkmark ${todo.completed ? 'checked' : ''}`}>
              </div>
            </label>
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
            <button className="delete-button" onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList