import { useState } from 'react'
import { useTodoContext } from './TodoContext'
import './TodoForm.css'

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('')
  const { addTodo } = useTodoContext()

  const handleChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue)
      setInputValue('')
    }
  };

  return (
    <div className="todo-form-container">
      <h2 className="form-title">Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
            <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Add a new todo"
            className="todo-input"
            />
            <button type="submit" className="add-button">Add</button>
            </div>
      </form>
    </div>
  )
}

export default TodoForm