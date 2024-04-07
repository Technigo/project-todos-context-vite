import { TodoProvider } from "./Contexts/TodoContext"
import { TaskList } from "./Components/TaskList"

export const App = () => {
  return (
    <TodoProvider>
      <TaskList />
    </TodoProvider>
  )
}
