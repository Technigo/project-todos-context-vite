import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import { ToDoProvider } from './context/ToDoContext'

export const App = () => {
  return (
    <ToDoProvider>
      <ToDoList />
      <ToDoForm />
    </ToDoProvider>
  )
}
