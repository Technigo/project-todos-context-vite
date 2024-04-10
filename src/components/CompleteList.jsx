import { useComplete } from '../context/CompleteContext'
import { useToDo } from '../context/ToDoContext'
import '../styling/CompletedList.css'
import trash from '../assets/rubbish-bin.svg'
import TaskList from './TaskList'

const CompleteList = () => {
  const { complete } = useComplete()

  return (
    <div className="section completed">
      <h1>Completed</h1>
      <ul className="complete-list">
        <TaskList data="complete" />
      </ul>
      <p>Count:{complete.length}/5</p>
    </div>
  )
}

export default CompleteList
