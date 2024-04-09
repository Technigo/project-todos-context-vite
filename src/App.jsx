import { TodoList } from "./components/TodoList"
import { TasksProvider } from "./contexts/TasksContext"

export const App = () => {
  return ( 
    <TasksProvider>
      <h1>To Do-app!</h1>
      <TodoList />
    </TasksProvider>
  )
}
