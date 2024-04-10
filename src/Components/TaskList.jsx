import { useToDoContext } from '../Contexts/TodoContext'
import moment from 'moment'
import '../Styles/Task.css'
import { Filters } from './Filters'
export const TaskList = () => {
  const { taskList, deleteTask, completeTask } = useToDoContext()
  const now = moment().format('MMM Do YY')

  const handleDelete = (taskId) => {
    deleteTask(taskId)
  }
  const handleCheckboxChange = (taskId, isCompleted) => {
    completeTask(taskId, isCompleted)
  }
  return (
    <>
      <Filters />
      {taskList &&
        taskList.map((item) => (
          <div key={item.id} className="taskItem">
            <input
              id={`checkbox-${item.id}`}
              className="checkboxInput"
              type="checkbox"
              value={item.content}
              checked={item.completed}
              onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
            />
            <label
              htmlFor={`checkbox-${item.id}`}
              className="customRadioCheckbox"
            >
              <div className="customCheckboxContent">
                <button
                  className="deleteBtn"
                  onClick={() => handleDelete(item.id)}
                >
                  x
                </button>
                <h2>{item.content}</h2>
                <div className="checkboxDatesContainer">
                  <h5>{moment(item.startDate).format('h:mm a')}</h5>
                </div>
              </div>
            </label>
          </div>
        ))}
    </>
  )
}
