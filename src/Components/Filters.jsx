export const Filters = ({ setFilter, uncompletedTasksCount }) => {
  return (
    <div className="filtersWrapper">
      <button onClick={() => setFilter('all')}>All Tasks</button>
      <button onClick={() => setFilter('pending')}>Pending</button>
      <button onClick={() => setFilter('completed')}>Completed Tasks</button>
      <span>Tasks to complete: {uncompletedTasksCount}</span>
    </div>
  )
}
