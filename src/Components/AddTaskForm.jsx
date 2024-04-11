import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/form.css'
import { redirect } from 'react-router-dom'
import { useToDoContext } from '../Contexts/TodoContext'
export const AddTaskForm = () => {
  const { addTask, toggleAddTaskPopup } = useToDoContext()
  const [newTask, setNewTask] = useState({ content: '' })
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handleChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value })
  }
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    if (newTask.content) {
      addTask(newTask)
      setNewTask({ content: '' })
      navigate('/')
      setShowSuccessMessage(true)
      setTimeout(() => setShowSuccessMessage(false), 3000)
      setTimeout(() => toggleAddTaskPopup(false), 1000)
    } else {
      alert('Please fill in the form')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add your new Task
        <textarea
          name="content"
          cols="30"
          rows="10"
          placeholder="Task to-do..."
          value={newTask.content}
          onChange={handleChange}
        ></textarea>
      </label>

      <button type="submit">Submit</button>
      {showSuccessMessage && (
        <div className="success-message">Task added successfully!</div>
      )}
    </form>
  )
}
