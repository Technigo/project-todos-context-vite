import { useToDo } from '../context/ToDoContext'
import { useComplete } from '../context/CompleteContext'
import '../styling/ToDoList.css'
import TaskList from './TaskList'
import clear from '../assets/noToDo.svg'

const ToDoList = () => {
  const { ToDo, completeAllToDo } = useToDo()
  const { addAllComplete } = useComplete()

  return (
    <div className="section todo-list">
      <div className="top-todo">
        <h1>To do:</h1>
        <button
          type="button"
          className="button"
          onClick={() => {
            completeAllToDo()
            addAllComplete(ToDo)
          }}
          disabled={ToDo.length === 0 ? true : false}
        >
          Complete all
        </button>
      </div>
      {ToDo.length === 0 ? (
        <img src={clear} alt="No todo" className="clear" />
      ) : (
        <TaskList data="ToDo" />
      )}
      <p className='count'>Count:{ToDo.length}/5</p>
    </div>
  )
}

export default ToDoList
