import { useState } from 'react'
import '../Styles/form.css'
import { redirect } from 'react-router-dom'
import { useToDoContext } from '../Contexts/TodoContext'
export const AddTaskForm = () => {
  const { taskList, addTask } = useToDoContext()
  const [newTask, setNewTask] = useState({ content: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newTask.content) {
      addTask(newTask)
      setNewTask({ content: '' })
      setSubmitted(true)
    } else {
      alert('Please fill in the form')
    }
    if (submitted) {
      return redirect('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="content"
        cols="30"
        rows="10"
        placeholder="Task to-do..."
        value={newTask.content}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  )
}
