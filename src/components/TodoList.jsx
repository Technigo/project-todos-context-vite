// A component to display a list of todo items
import { useContext } from "react"
import { TodoContext } from "./TodoContext"
import { Todo } from "./TodoItem"

export const TodoList = () => {
  // Extract todos and the toggleTodo function from our TodoContext.
  const { todos, toggleTodo, removeTodo } = useContext(TodoContext)

  // .filter: keeps all the items that matches (returns "true" in ((todo) => todo.completed))
  const completedTodos = todos.filter((todo) => todo.completed)
  const uncompletedTodos = todos.filter((todo) => !todo.completed)

  // Count for completed and uncompleted tasks
  const completedCount = completedTodos.length
  const uncompletedCount = uncompletedTodos.length

  return (
    <>
      <div className="task-count">
        <span className="todo-count">Uncompleted: {uncompletedCount}</span>
        <span> Completed: {completedCount}</span>
      </div>
      <div className="list-container">
        <div className="uncompleted">
          {" "}
          <h2>Uncompleted</h2>
          <ul>
            {uncompletedTodos.map((todo) => (
              // create Todo.jsx component to handle both completed and uncompleted todos
              // these props (id, completed, todo...) are the data that Todo.jsx needs
              <Todo
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                todo={todo.todo}
                createdAt={todo.createdAt}
                onChange={() => toggleTodo(todo.id)}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        </div>

        <div className="completed">
          <h2>Completed</h2>
          <ul>
            {completedTodos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                todo={todo.todo}
                createdAt={todo.createdAt}
                onChange={() => toggleTodo(todo.id)}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
