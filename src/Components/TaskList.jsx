import { useToDoContext } from '../Contexts/TodoContext'
import '../Styles/button.css'
import { useState } from 'react'
import moment from 'moment'
import '../Styles/Task.css'
import { Filters } from './Filters'
import { AddTaskForm } from './AddTaskForm'
import { DateFilters } from './DateFilters'
import { ProgressCircle } from './ProgressCircle'

export const TaskList = () => {
  const {
    taskList,
    deleteTask,
    completeTask,
    toggleAddTaskPopup,
    showAddTaskPopup,
    loading,
  } = useToDoContext()
  const [filter, setFilter] = useState('all')

  const filteredTasks = taskList
    .filter((task) => {
      if (filter === 'completed') return task.completed
      if (filter === 'pending') return !task.completed
      if (filter === 'work') return task.category === 'work'
      if (filter === 'personal') return task.category === 'personal'
      if (filter === 'health') return task.category === 'health'
      if (filter === 'economy') return task.category === 'economy'
      if (filter === 'events') return task.category === 'events'
      return true
    })
    .filter((task) => {
      if (task.completed) {
        return moment().diff(moment(task.completedAt), 'hours') <= 3
      }
      return true
    })
  const completedTasksCount = taskList.filter((task) => task.completed).length
  const uncompletedTasksCount = taskList.filter(
    (task) => !task.completed
  ).length
  const handleDelete = (taskId) => {
    deleteTask(taskId)
  }
  const handleCheckboxChange = (taskId, isCompleted) => {
    completeTask(taskId, isCompleted, isCompleted ? new Date() : null)
  }
  if (loading) {
    return (
      <div className="loadingIcon">
        <img src="/loading.icon.gif" alt="loading-icon"></img>
      </div>
    )
  }

  return (
    <>
      <div className="header">
        <div className="user">
          <img src="/man.png" alt="user-picture" />
          <h2>Hello User!</h2>
        </div>
        <ProgressCircle
          totalTasks={taskList.length}
          completedTasks={completedTasksCount}
        />
      </div>

      <DateFilters setFilter={setFilter} />
      <section className="taskList">
        <Filters
          filter={filter}
          setFilter={setFilter}
          uncompletedTasksCount={uncompletedTasksCount}
        />
        {filteredTasks.length === 0 ? (
          <>
            <h2>No tasks - click on the + to add a new Task</h2>
            <img src="/empty-state.jpg" alt="no-tasks" />
          </>
        ) : (
          filteredTasks &&
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
          ))
        )}
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
