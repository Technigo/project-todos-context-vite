import ToDoList from './components/ToDoList'
import { ToDoProvider } from './context/ToDoContext'
import { CompleteProvider } from './context/CompleteContext'
import CompleteList from './components/CompleteList'
import InspirationCard from './components/InspirationCard'
import './styling/app.css'

export const App = () => {
  return (
    <ToDoProvider>
      <div className="main-container">
        <CompleteProvider>
          <ToDoList />
          <CompleteList />
        </CompleteProvider>
        <InspirationCard />
      </div>
    </ToDoProvider>
  )
}
