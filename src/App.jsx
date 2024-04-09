import ToDoList from './components/ToDoList'
import { ToDoProvider } from './context/ToDoContext'
import { CompletedList } from './components/CompletedList'
import InspirationCard from './components/InspirationCard'
import './styling/app.css'

export const App = () => {
  return (
    <ToDoProvider>
      <div className="main-container">
      
      <ToDoList />
      <CompletedList />
      <InspirationCard />
      </div>
    </ToDoProvider>
  )
}
