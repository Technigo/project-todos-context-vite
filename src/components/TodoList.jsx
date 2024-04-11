import { useAppData } from "../contexts/FormContext";

export const TodoList = () =>{
    const {todos, removeTask} = useAppData()

    const isAdded = (taskId) => {
      return todos.some((item) => item.id === taskId)
    } 

    const handleRemoveTask = (task) => {
        if (isAdded(task.id)){
            removeTask(task)
        }
    }
   
    return (
        <div className="todo-list-container">
            {todos.length >0 ? (
                <ul style={{listStyle: 'none'}}>
                    {todos.map((task, index)=>(
                        <li key={index}>{task}
                        <span><button onClick={()=>handleRemoveTask(task)}>⛔️</button></span>
                        </li>
                    ))}
                </ul>
            ): <ul>No task</ul>}
        </div>
    )
}

//todo-list