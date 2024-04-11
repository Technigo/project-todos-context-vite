// TodoList.js
import { useTodoContext } from './TodoContext'

const TodoList = () => {
  const { todos, removeTodo } = useTodoContext()

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
