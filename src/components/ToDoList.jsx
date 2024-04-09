import { useToDo } from '../context/ToDoContext'
import ToDoForm from './ToDoForm'
import '../styling/ToDoList.css'

const ToDoList = () => {
  const { ToDo } = useToDo()

  return (
    <div className="card set-todo">
        <ToDoForm />
    <ul className="section todo-list">
    <h1>To do:</h1>
      {ToDo.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" id={index} />
          <label htmlFor={index}>{todo.task}</label>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default ToDoList
