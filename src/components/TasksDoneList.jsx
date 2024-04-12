import { Task } from "./Task"
import { useTasks } from "../contexts/TasksContext"
import Fries from "/fries.png"

export const TasksDoneList = () => {
  const { tasks, deleteAllDone } = useTasks()

  if (tasks.filter((task) => task.done === true).length === 0) {
    return (
      <div className="empty-state">
        <img src={Fries} alt="Icon of french fries" className="empty-state-pic"/>
        <p>You have done nothing. No fries for you!</p>
      </div>
    )
  } else {
    return (
      <div className="task-list">
        <h3>Finished tasks</h3>
        {tasks
          .filter((task) => task.done === true)
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
        <div className="count-tasks">
          <p>
            You have finished{" "}
            {tasks.filter((task) => task.done === true).length} tasks.
          </p>
          <button className="move-all" onClick={deleteAllDone}>
            Delete all
          </button>
        </div>
      </div>
    )
  }
}