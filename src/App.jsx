import React from "react"
import "./app.css"
import MyComponent from "./components/MyComponent.jsx"
import TodoList from "./components/listForm/TodoList.jsx"
import TodoForm from "./components/listForm/TodoForm.jsx"
import Note from "./components/listForm/Note.jsx"

export const App = () => {
  return (
    <div className="App">
      <h1 className="heading">daily planning</h1>
      <div className="notesContainer">
        <Note />
      </div>
      <div className="todoContainer">
        <TodoForm />
        <TodoList />
      </div>
      <div className="completedTasksContainer">
        <MyComponent />
      </div>
    </div>
  )
}
