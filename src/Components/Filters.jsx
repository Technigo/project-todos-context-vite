import { useToDoContext } from '../Contexts/TodoContext'

export const Filters = () => {
  const { filterPending, filterCompleted, showAllTasks } = useToDoContext()
  return (
    <div className="filtersWrapper">
      <button onClick={showAllTasks}>All Tasks</button>
      <button onClick={filterPending}>Pending</button>
      <button onClick={filterCompleted}>Completed Tasks</button>
    </div>
  )
}
