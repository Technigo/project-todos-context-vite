import { useTodo } from "../contexts/TodoContext.jsx"
import { useCheckbox } from "../contexts/CheckboxContext.jsx"

//Map and list all todos
export const TodoList = () => {
const { todo } = useTodo()
const { tasks, toggleChecked } = useCheckbox()
    
console.log(tasks)


    return (
        <div> 
            {todo.map((task, index) => (
            <div className="task" key={index}>
            <form>
             <input 
            type="checkbox"
            key={index}
            onChange={toggleChecked}
            ></input>
            <label>
            {task.todotext}</label>
            </form>
            </div>
            ))}
        </div>
    )

}  

