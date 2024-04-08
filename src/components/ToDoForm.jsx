import { useState } from 'react'
import { useToDo } from '../context/ToDoContext'

const ToDoForm = () => {
  const [newTodo, setNewTodo] = useState('')
  const { ToDo, addToDo } = useToDo()
  console.log(ToDo[0].task)

  const handleInputChange = (e) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newTodo)
    addToDo(newTodo)
    setNewTodo("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newTodo}
        type="text"
        placeholder="write your task here..."
        onChange={handleInputChange}
      />
      <button type="submit">submit</button>
    </form>
  )
}

export default ToDoForm
