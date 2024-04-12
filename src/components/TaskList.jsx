import { Task } from "./Task"
import { useTasks } from "../contexts/TasksContext"
import IceCream from "/ice-cream.png"

export const TaskList = () => {
  const { tasks, completeAll } = useTasks()

  if (tasks.filter((task) => task.done === false).length === 0) {
    return (
      <div className="empty-state">
        <img src={IceCream} alt="Icon of ice cream" className="empty-state-pic"/>
        <p>There's nothing to do. Go eat some ice cream!</p>
      </div>
    )
  } else {
    return (
      <div className="task-list">
        <h3>Task list</h3>
        {tasks
          .filter((task) => task.done === false)
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
        <div className="count-tasks">
          <p>You have {tasks.filter((task) => task.done === false).length} tasks to do.</p>
          <button onClick={completeAll} className="move-all">Complete all</button>
        </div>
      </div>
    )
  }
}
