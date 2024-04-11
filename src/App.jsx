import { TaskList } from "./components/TaskList"
import { TaskForm } from "./components/TaskForm"
import { TasksDoneList } from "./components/TasksDoneList"
import { TasksProvider } from "./contexts/TasksContext"

export const App = () => {
  return (
    <TasksProvider>
      <h1>To Do-app!</h1>
      <TaskList />
      <TaskForm />
      <TasksDoneList />
    </TasksProvider>
  )
}
