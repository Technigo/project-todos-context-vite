import { useState } from 'react'
import { useToDo } from '../context/ToDoContext'
import '../styling/ToDoForm.css'

const ToDoForm = () => {
  const [newTodo, setNewTodo] = useState('')
  const { addToDo } = useToDo()

  const handleInputChange = (e) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //validate the task - avoid empty input
    console.log(newTodo)
    addToDo(newTodo)
    setNewTodo('')
  }
  return (
    <div className="section todo-form">
      <h1>What do you need to do today?</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          type="text"
          placeholder="write your task here..."
          onChange={handleInputChange}
        />
        <button
          disabled={newTodo ? false : true}
          type="submit"
          className="button add"
        >
          Add to list
        </button>
      </form>
    </div>
  )
}

export default ToDoForm
