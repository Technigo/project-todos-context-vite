import { TodoProvider } from './Contexts/TodoContext'
import { TaskList } from './Components/TaskList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PlusButton } from './Components/PlusButton'
import { AddTaskForm } from './Components/AddTaskForm'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <TodoProvider>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/addnewtask" element={<AddTaskForm />} />
          </Routes>

          <PlusButton />
        </TodoProvider>
      </BrowserRouter>
    </>
  )
}
