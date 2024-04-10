import { useToDo } from '../context/ToDoContext'
import { useComplete } from '../context/CompleteContext'
import trash from '../assets/rubbish-bin.svg'
import unChecked from '../assets/empty-check.svg'
import checked from '../assets/checked.svg'
import '../styling/TaskList.css'

const TaskList = ({ data }) => {
  const { ToDo, addToDo, removeToDo } = useToDo()
  const { complete, addComplete, removeComplete } = useComplete()

  return (
    <ul className="task-list">
      {(data === 'ToDo' ? ToDo : complete).map((item) => (
        //replace the value of the key and some attr with item.timestamp later
        <li key={item.createdAt}>
          <div className="task-item">
            <div className="checkbox">
              <input
                type="checkbox"
                id={item.createdAt}
                // value={item.task}
                defaultChecked={complete.includes(item)}
                onChange={() => {
                  if (data === 'ToDo') {
                    addComplete(item)
                    removeToDo(item)
                  } else {
                    addToDo(item.task)
                    removeComplete(item)
                  }
                }}
              />
              <img
                src={unChecked}
                alt="unchecked checkbox"
                className="unchecked checkbox"
              />
              <img
                src={checked}
                alt="checked checkbox"
                className="checked checkbox"
              />
            </div>
            <div className="task-content">
              <label htmlFor={item.createdAt}>{item.task}</label>
              <img
                src={trash}
                className="trashbin"
                onClick={() => {
                  if (data === 'ToDo') {
                    removeToDo(item)
                  } else {
                    removeComplete(item)
                  }
                }}
              />
            </div>
          </div>
          <p>{item.createdAt.calendar()}</p>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
