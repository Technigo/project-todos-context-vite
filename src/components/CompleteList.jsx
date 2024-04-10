import { useComplete } from '../context/CompleteContext'
import { useToDo } from '../context/ToDoContext'
import '../styling/CompletedList.css'
import trash from '../assets/rubbish-bin.svg'
import TaskList from './TaskList'
import noComplete from '../assets/nocomplete.svg'

const CompleteList = () => {
  const { complete } = useComplete()

  return (
    <div className="section completed">
      <h1>Completed:</h1>
      {complete.length === 0 ? (
        <img
          className="no-complete-img"
          src={noComplete}
          alt="no completed tasks"
        />
      ) : (
        <TaskList data="complete" />
      )}
      <p className="count">Count:{complete.length}/5</p>
    </div>
  )
}

export default CompleteList
