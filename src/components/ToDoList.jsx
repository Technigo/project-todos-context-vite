import { useToDo } from "../context/ToDoContext"


const ToDoList = () => {

    const { ToDo } = useToDo()

    return (
    <div className="todo-list">
        <ul>
            {ToDo.map((todo, index) => (
                <li key={index}>{todo.task}</li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList