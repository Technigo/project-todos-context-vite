import { useToDoContext } from '../Contexts/TodoContext'
import { useState } from 'react'
import moment from 'moment'
import '../Styles/Task.css'
import { Filters } from './Filters'
export const TaskList = () => {
  const { taskList, deleteTask, completeTask } = useToDoContext()
  const [filter, setFilter] = useState('all')
  const filteredTasks = taskList.filter((task) => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    return true
  })
  const uncompletedTasksCount = taskList.filter(
    (task) => !task.completed
  ).length
  const handleDelete = (taskId) => {
    deleteTask(taskId)
  }
  const handleCheckboxChange = (taskId, isCompleted) => {
    completeTask(taskId, isCompleted)
  }
  return (
    <>
      <Filters
        setFilter={setFilter}
        uncompletedTasksCount={uncompletedTasksCount}
      />
      {filteredTasks &&
        filteredTasks.map((item) => (
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
                <button id="deleteBtn" onClick={() => handleDelete(item.id)}>
                  ✖️
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
