import { Header } from "./components/Header"
import { TaskForm } from "./components/TaskForm"
import { TaskList } from "./components/TaskList"
import { TasksDoneList } from "./components/TasksDoneList"
import { TasksProvider } from "./contexts/TasksContext"

export const App = () => {
  return (
    <TasksProvider>
      <Header />
      <TaskForm />
      <TaskList />
      <TasksDoneList />
    </TasksProvider>
  )
}
