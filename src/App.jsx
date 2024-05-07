import { TodoProvider } from './components/TodoContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App