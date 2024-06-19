import { TodoProvider } from './components/TodoContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1 className="app-container">Let's get organised!</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App