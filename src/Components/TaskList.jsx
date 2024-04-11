import { useToDoContext } from '../Contexts/TodoContext'
import '../Styles/button.css'
import { useState } from 'react'
import moment from 'moment'
import '../Styles/Task.css'
import { Filters } from './Filters'
import { AddTaskForm } from './AddTaskForm'
import { DateFilters } from './DateFilters'
export const TaskList = () => {
  const {
    taskList,
    deleteTask,
    completeTask,
    toggleAddTaskPopup,
    showAddTaskPopup,
  } = useToDoContext()
  const [filter, setFilter] = useState('all')

  const filteredTasks = taskList.filter((task) => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    if (filter === 'work') return task.category === 'work'
    if (filter === 'personal') return task.category === 'personal'
    if (filter === 'health') return task.category === 'health'
    if (filter === 'economy') return task.category === 'economy'
    if (filter === 'events') return task.category === 'events'
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
      <DateFilters setFilter={setFilter} />
      <section className="taskList">
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
                onChange={(e) =>
                  handleCheckboxChange(item.id, e.target.checked)
                }
              />
              <label
                htmlFor={`checkbox-${item.id}`}
                className="customRadioCheckbox"
              >
                <div className="customCheckboxContent">
                  <button id="deleteBtn" onClick={() => handleDelete(item.id)}>
                    ✖️
                  </button>
                  <h2>
                    {item.content}
                    <h5>{moment(item.createdAt).format('h:mm a')}</h5>
                  </h2>
                </div>
              </label>
            </div>
          ))}
        {/* Add popup */}
        {showAddTaskPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="popup-close" onClick={toggleAddTaskPopup}>
                &times;
              </span>
              <AddTaskForm />
            </div>
          </div>
        )}

        {/* Button to toggle add task popup */}
        <button id="plusButton" onClick={toggleAddTaskPopup}>
          {showAddTaskPopup ? '-' : '+'}
        </button>
      </section>
    </>
  )
}
