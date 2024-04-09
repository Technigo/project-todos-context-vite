import { useTasks } from "../contexts/TasksContext"

export const TodoList = () => {
    const { tasks } = useTasks()

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task">
            <p>{task.task}</p>
        </div>
      ))}
    </div>
  )
}
