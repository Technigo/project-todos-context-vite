import { useToDo } from '../context/ToDoContext'

const ToDoList = () => {
  const { ToDo } = useToDo()

  return (
    <ul className="todo-list">
      {ToDo.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" id={index} />
          <label htmlFor={index}>{todo.task}</label>
        </li>
      ))}
    </ul>
  )
}

export default ToDoList
