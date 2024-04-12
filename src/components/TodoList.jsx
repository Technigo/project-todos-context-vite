import { useAppData } from "../contexts/FormContext";
import moment from "moment";


export const TodoList = () =>{
    const {todos, removeTask, toggleTodo} = useAppData()

    

    // const isAdded = (taskId) => {
    //   return todos.some((item) => item.id === taskId)
    // } 

    const handleRemoveTask = (taskToRemove) => {
        removeTask(taskToRemove)
    }

    const handleToggle =(index, completed)=>{
        toggleTodo(index, !completed)
    }


   
   const addTaskTime = moment().format("MMM Do YY")

    // const completedTask = (todos)=> {
    //    return }

    // const uncompletedTask = (todos)=>{
    //     return todos.filter(todo => !todo.completed)}

   
   
    return (
        <div className="todo-list-container">
            {todos.length >0 ? (
                <>
                <div>
                    {todos.length ===1 ? <p>You have 1 task in your todo list.</p> : <p>You have {todos.length} tasks in your todo list.</p>}
                </div>
                <ul style={{listStyle: 'none'}}>
                    {todos.map((todo, index)=>(
                        <li key={index}>
                            <input 
                            type="checkbox"
                            checked={todo.completed}
                            onChange={()=> handleToggle(index, todo.completed)}/>
                            <label style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</label>{' '}
                            <time >{addTaskTime}</time>
                        <span><button onClick={()=>handleRemoveTask(todo)}>⛔️</button></span>
                        </li>
                    ))}
                </ul>
                </>
                
            ): <ul>No task</ul>}
        </div>
    )
}

//todo-list